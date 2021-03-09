"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllCountries = void 0;
const queries_1 = require("../../../endPoints/queries");
exports.getAllCountries = async () => {
    const allCountries = await queries_1.Queries.DropshippingQueries.getCountries();
    return allCountries;
};
