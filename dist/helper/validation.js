"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderJoiValidation = exports.inventoryJoiValidation = exports.groceryJoiValidation = void 0;
// import {customeError} from "../helper/helper"
const joi = require("joi");
const groceryJoiValidation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const schema = joi.object({
        product_name: joi.string().alphanum().min(3).max(25).trim(true).required(),
        price: joi.number().min(1),
        quantity: joi.number().integer()
    });
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
});
exports.groceryJoiValidation = groceryJoiValidation;
const inventoryJoiValidation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const schema = joi.object({
        action: joi.string().valid('increment', 'decrement').required(),
        quantity: joi.number().integer().required()
    });
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
});
exports.inventoryJoiValidation = inventoryJoiValidation;
const orderJoiValidation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const itemsSchema = joi.array().items(joi.object({
        order_id: joi.number().integer().min(1).required(),
        quantity: joi.number().integer().required()
    })).required();
    const schema = joi.object({
        items: itemsSchema
    }).required();
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
});
exports.orderJoiValidation = orderJoiValidation;
