"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhotoProfile = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.PhotoProfile = apollo_server_express_1.gql `
  type Photos {
    itemid: ID
    option: String
    photo: String
    categoryid: Int
    mainphoto: Int
  }
`;
