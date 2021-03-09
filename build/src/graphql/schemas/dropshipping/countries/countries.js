"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryProfile = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.CountryProfile = apollo_server_express_1.gql `
  type Country {
    id: ID
    country_code: String
    country_name: String
  }
`;
