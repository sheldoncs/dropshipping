"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateMainPhoto = exports.resetMainPhoto = exports.getItemAndCategory = void 0;
const queries_1 = require("../../../endPoints/queries");
exports.getItemAndCategory = async (root, args) => {
    const itemAndCategory = await queries_1.Queries.DropshippingQueries.getItemAndCategory(args.itemid);
    return itemAndCategory;
};
exports.resetMainPhoto = async (root, args) => {
    let chatter = await queries_1.Queries.DropshippingQueries.resetMainPhoto(args.categoryid);
    let Category = {
        catid: args.categoryid,
    };
    const message = `Category, ${args.categoryid} reset`;
    return { message, Category };
};
exports.updateMainPhoto = async (root, args) => {
    let mainPhoto = await queries_1.Queries.DropshippingQueries.updateMainPhoto(args.itemid);
    let UpdateItem = {
        itemid: args.itemid,
    };
    const message = `Item, ${args.itemid} updated`;
    return { message, UpdateItem };
};
