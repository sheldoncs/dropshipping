"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuCategoryProfile = exports.CategoryProfile = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.CategoryProfile = apollo_server_express_1.gql `
  type Category {
    id: ID
    category: String
    header: String
    itemCategory: String
    item: String
    photo1: String
  }
`;
exports.MenuCategoryProfile = apollo_server_express_1.gql `
  type Menu {
    id: ID
    category: String
    comments: String
  }
`;
