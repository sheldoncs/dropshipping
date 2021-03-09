"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrderResponse = exports.OrderProfile = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.OrderProfile = apollo_server_express_1.gql `
  type Order {
    id: ID
    itemid: Int
    categoryid: Int
    orderid: Int
    quantity: Int
    totalprice: Float
    photo: String
  }
`;
exports.CreateOrderResponse = apollo_server_express_1.gql `
  type CreateOrderResponse {
    message: String!
    Order: Order
  }
`;
