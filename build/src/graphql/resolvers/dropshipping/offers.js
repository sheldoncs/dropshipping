"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOffer = exports.getNonDiscountOffers = exports.getAllOffers = void 0;
const queries_1 = require("../../../endPoints/queries");
exports.getAllOffers = async () => {
    const allOffers = await queries_1.Queries.DropshippingQueries.getOffers();
    return allOffers;
};
exports.getNonDiscountOffers = async () => {
    const offers = await queries_1.Queries.DropshippingQueries.getNonDiscountOffers();
    return offers;
};
exports.getOffer = async (root, args) => {
    const offer = await queries_1.Queries.DropshippingQueries.getOffer(args.id);
    return offer;
};
