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
exports.createUserOrder = exports.getAllGrocery = void 0;
const sqldb_1 = require("../sqldb");
const groceryItems_1 = require("../models/groceryItems");
const validation_1 = require("../helper/validation");
const groceryItems_2 = require("../models/groceryItems");
const getAllGrocery = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const conn = yield (0, sqldb_1.connect)();
    const all_grocery_items = yield (0, groceryItems_1.getAllItemGroceryDetails)(conn);
    return res.status(200).json({
        status: "success",
        all_grocery_items
    });
});
exports.getAllGrocery = getAllGrocery;
const createUserOrder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, validation_1.orderJoiValidation)(req, res);
    const conn = yield (0, sqldb_1.connect)();
    yield (0, groceryItems_2.createOrder)(req, conn);
    return res.status(200).json({
        status: "success"
    });
});
exports.createUserOrder = createUserOrder;
