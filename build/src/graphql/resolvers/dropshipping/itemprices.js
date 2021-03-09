"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPriceOptions = exports.getAllItems = void 0;
const queries_1 = require("../../../endPoints/queries");
exports.getAllItems = async (root, args) => {
    const allItems = await queries_1.Queries.DropshippingQueries.getItems(args.categoryid);
    return allItems;
};
exports.getPriceOptions = async (root, args) => {
    const priceOptions = await queries_1.Queries.DropshippingQueries.getPriceOptions(args.categoryid);
    return priceOptions;
};
