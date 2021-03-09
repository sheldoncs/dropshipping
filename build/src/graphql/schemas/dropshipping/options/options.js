"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionProfile = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.OptionProfile = apollo_server_express_1.gql `
  type Option {
    id: ID
    title: String
    option1: String
    option2: String
    option3: String
    option4: String
  }
`;
