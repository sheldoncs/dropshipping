"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrderList = exports.addOrders = void 0;
const queries_1 = require("../../../endPoints/queries");
exports.addOrders = async (root, payload) => {
    const findProfile = await queries_1.Queries.DropshippingQueries.getOrderList(payload.orderid);
    if (findProfile.length == 0) {
        console.log("payload", payload, findProfile.length);
        await queries_1.Queries.DropshippingQueries.addOrder([
            Object.assign({}, payload),
        ]);
        const Order = Object.assign({}, payload);
        const message = `Order #, ${payload.orderid} created successfully`;
        return { message, Order };
    }
    else {
        const message = `Order already exists`;
        return { message };
    }
};
exports.getOrderList = async (root, args) => {
    const orders = await queries_1.Queries.DropshippingQueries.getOrderList(args.orderid);
    return orders;
};
