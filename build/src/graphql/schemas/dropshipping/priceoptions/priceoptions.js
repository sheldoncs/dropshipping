"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceOptionsProfile = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.PriceOptionsProfile = apollo_server_express_1.gql `
  type PriceOptions {
    id: ID
    hairlength: String
    categoryid: Int
    price: Float
  }
`;
