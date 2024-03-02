"use strict";
// import {customeError} from "../helper/helper"
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
exports.createOrder = exports.updateInventoryItem = exports.updateGroceryItem = exports.deleteGroceryItem = exports.getAllItemGroceryDetails = exports.createGroceryItems = void 0;
const createGroceryItems = (connection, req) => __awaiter(void 0, void 0, void 0, function* () {
    const { product_name, price, quantity } = req.body;
    const cmd = `
        INSERT INTO 
        items (product_name,
            price,
            quantity) 
        VALUES('${product_name}', '${price}', '${quantity}')
    `;
    const k = yield connection.query(cmd);
    return k[0];
});
exports.createGroceryItems = createGroceryItems;
const getAllItemGroceryDetails = (connection) => __awaiter(void 0, void 0, void 0, function* () {
    const grocery_query = `select * from items`;
    const query_output = yield connection.query(grocery_query);
    return query_output[0];
});
exports.getAllItemGroceryDetails = getAllItemGroceryDetails;
const deleteGroceryItem = (id, connection) => __awaiter(void 0, void 0, void 0, function* () {
    const grocery_query = `delete from items where id=${id}`;
    const query_output = yield connection.query(grocery_query);
    return query_output;
});
exports.deleteGroceryItem = deleteGroceryItem;
const updateGroceryItem = (req, id, connection) => __awaiter(void 0, void 0, void 0, function* () {
    const grocery_query = `UPDATE items SET product_name = '${req.body.product_name}', price = ${req.body.price}, quantity = ${req.body.quantity} WHERE id=${id}`;
    const query_output = yield connection.query(grocery_query);
    return query_output;
});
exports.updateGroceryItem = updateGroceryItem;
const updateInventoryItem = (req, id, connection) => __awaiter(void 0, void 0, void 0, function* () {
    const grocery_query = `UPDATE items SET quantity = ${req.body.quantity} WHERE id=${id}`;
    const query_output = yield connection.query(grocery_query);
    return query_output;
});
exports.updateInventoryItem = updateInventoryItem;
const createOrder = (req, connection) => __awaiter(void 0, void 0, void 0, function* () {
    for (const order of req.body.items) {
        const cmd = `
            INSERT INTO 
            order_booked (order_id,
                quantity)
            VALUES(${order.order_id},${order.quantity})
        `;
        yield connection.query(cmd);
    }
    return;
});
exports.createOrder = createOrder;
