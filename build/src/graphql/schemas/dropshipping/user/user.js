"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserResponse = exports.UserProfile = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.UserProfile = apollo_server_express_1.gql `
  scalar Date
  type User {
    id: ID
    username: String
    email: String
    password: String
    firstname: String
    lastname: String
    addr1: String
    addr2: String
    zip: String
    country: String
    isGoogle: Int
  }
`;
exports.CreateUserResponse = apollo_server_express_1.gql `
  type CreateUserResponse {
    message: String!
    User: User
  }
`;
