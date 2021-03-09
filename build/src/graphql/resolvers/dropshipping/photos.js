"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPhotosByCategory = void 0;
const queries_1 = require("../../../endPoints/queries");
exports.getPhotosByCategory = async (root, args) => {
    const photos = await queries_1.Queries.DropshippingQueries.getPhotosByCategory(args.categoryid);
    return photos;
};
