"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queries = void 0;
const queries_1 = require("./dropshipping/queries");
const queries_2 = require("./logins/queries");
exports.Queries = {
    DropshippingQueries: queries_1.DropshippingQueries,
    LoginQueries: queries_2.LoginQueries,
};
