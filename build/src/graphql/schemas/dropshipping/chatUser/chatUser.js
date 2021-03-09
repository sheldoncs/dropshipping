"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSocketResponse = exports.CreateChatUserResponse = exports.socketProfile = exports.ChatUserProfile = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.ChatUserProfile = apollo_server_express_1.gql `
  type ChatUser {
    id: ID
    name: String
    email: String
    isadmin: Int
    active: Int
    socketid: String
  }
`;
exports.socketProfile = apollo_server_express_1.gql `
  type socket {
    socketid: String
  }
`;
exports.CreateChatUserResponse = apollo_server_express_1.gql `
  type CreateChatUserResponse {
    message: String!
    ChatUser: ChatUser
  }
`;
exports.CreateSocketResponse = apollo_server_express_1.gql `
  type CreateSocketResponse {
    message: String!
    Socket: socket
  }
`;
