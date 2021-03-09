"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateLastIdentityResponse = exports.lastIdentityProfile = exports.maxIdentityProfile = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.maxIdentityProfile = apollo_server_express_1.gql `
  type MaxIdentity {
    maxidentityid: Int
  }
`;
exports.lastIdentityProfile = apollo_server_express_1.gql `
  type LastIdentity {
    lastidentityid: Int
  }
`;
exports.CreateLastIdentityResponse = apollo_server_express_1.gql `
  type CreateLastIdentityResponse {
    message: String!
    LastIdentity: LastIdentity
  }
`;
