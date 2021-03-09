"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOptions = void 0;
const queries_1 = require("../../../endPoints/queries");
exports.getOptions = async (root, args) => {
    const options = await queries_1.Queries.DropshippingQueries.getOptions(args.categoryid);
    return options;
};
