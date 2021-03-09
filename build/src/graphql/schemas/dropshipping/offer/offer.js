"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfferProfile = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.OfferProfile = apollo_server_express_1.gql `
  type Offer {
    id: ID
    offer: String
    itemdetailsid: Int
    offertype: String
    condition: String
    amount: Int
    width: Int
    code: String
    categoryid: Int
  }
`;
