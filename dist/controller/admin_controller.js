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
exports.manageInventoryGrocery = exports.updateItemGrocery = exports.deleteItemGrocery = exports.getAllItemGrocery = exports.adminCreateGrocery = void 0;
const sqldb_1 = require("../sqldb");
const validation_1 = require("../helper/validation");
const groceryItems_1 = require("../models/groceryItems");
const adminCreateGrocery = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const conn = yield (0, sqldb_1.connect)();
    yield (0, validation_1.groceryJoiValidation)(req, res);
    const id = yield (0, groceryItems_1.createGroceryItems)(conn, req);
    return res.status(200).json({
        status: "success",
        id: id.insertId
    });
});
exports.adminCreateGrocery = adminCreateGrocery;
const getAllItemGrocery = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const conn = yield (0, sqldb_1.connect)();
    const all_grocery_items = yield (0, groceryItems_1.getAllItemGroceryDetails)(conn);
    return res.status(200).json({
        status: "success",
        all_grocery_items
    });
});
exports.getAllItemGrocery = getAllItemGrocery;
const deleteItemGrocery = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.query.id) {
        return res.status(400).json({ "message": 'please the the id' });
    }
    const conn = yield (0, sqldb_1.connect)();
    const data = yield (0, groceryItems_1.deleteGroceryItem)(req.query.id, conn);
    return res.status(200).json({
        status: "success"
    });
});
exports.deleteItemGrocery = deleteItemGrocery;
const updateItemGrocery = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.query.id) {
        return res.status(400).json({ "message": 'please the the id' });
    }
    yield (0, validation_1.groceryJoiValidation)(req, res);
    const conn = yield (0, sqldb_1.connect)();
    const data = yield (0, groceryItems_1.updateGroceryItem)(req, req.query.id, conn);
    return res.status(200).json({
        status: "success"
    });
});
exports.updateItemGrocery = updateItemGrocery;
const manageInventoryGrocery = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.query.id) {
        return res.status(400).json({ "message": 'please the the id' });
    }
    yield (0, validation_1.inventoryJoiValidation)(req, res);
    const conn = yield (0, sqldb_1.connect)();
    const data = yield (0, groceryItems_1.updateInventoryItem)(req, req.query.id, conn);
    return res.status(200).json({
        status: "success"
    });
});
exports.manageInventoryGrocery = manageInventoryGrocery;
