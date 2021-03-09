"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllCategories = exports.getCategory = void 0;
const queries_1 = require("../../../endPoints/queries");
exports.getCategory = async (root, args) => {
    const categories = await queries_1.Queries.DropshippingQueries.getCategory(args.category);
    return categories;
};
exports.getAllCategories = async () => {
    const allCategories = await queries_1.Queries.DropshippingQueries.getAllCategories();
    return allCategories;
};
