"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMainPhotoResponse = exports.ResetMainPhotoResponse = exports.ItemAndCategoryProfile = exports.UpdateMainPhotoProfile = exports.ResetMainPhotoProfile = exports.ItemProfile = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.ItemProfile = apollo_server_express_1.gql `
  type ItemPrice {
    id: ID
    option: String
    photo: String
    itemid: Int
    categoryid: Int
    price: Float
  }
`;
exports.ResetMainPhotoProfile = apollo_server_express_1.gql `
  type CategoryReset {
    categoryid: Int
  }
`;
exports.UpdateMainPhotoProfile = apollo_server_express_1.gql `
  type UpdateItem {
    itemid: Int
  }
`;
exports.ItemAndCategoryProfile = apollo_server_express_1.gql `
  type ItemAndCategory {
    option: String
    category: String
  }
`;
exports.ResetMainPhotoResponse = apollo_server_express_1.gql `
  type ResetMainPhotoResponse {
    message: String!
    Category: CategoryReset
  }
`;
exports.UpdateMainPhotoResponse = apollo_server_express_1.gql `
  type UpdateMainPhotoResponse {
    message: String!
    UpdateItem: UpdateItem
  }
`;
