"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMaxIdentity = exports.addLastIdentity = void 0;
const queries_1 = require("../../../endPoints/queries");
exports.addLastIdentity = async (root, payload) => {
    await queries_1.Queries.DropshippingQueries.addLastIdentity([
        Object.assign({}, payload),
    ]);
    const lastidentity = Object.assign({}, payload);
    const message = `lastidentity, ${payload.id} created successfully`;
    return { message, lastidentity };
};
exports.getMaxIdentity = async () => {
    const maxidentity = await queries_1.Queries.DropshippingQueries.getMaxIdentity();
    return maxidentity;
};
