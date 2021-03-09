"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userMutation = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.userMutation = apollo_server_express_1.gql `
  type Mutation {
    addUserInfo(
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
      admin: Int
    ): CreateUserResponse

    addOrders(
      itemid: Int
      categoryid: Int
      orderid: Int
      quantity: Int
      totalprice: Float
      photo: String
    ): CreateOrderResponse

    addChatUser(
      name: String
      email: String
      isadmin: Int
      active: Int
    ): CreateChatUserResponse

    addLastIdentity(lastidentityid: Int): CreateLastIdentityResponse

    deactivateActiveChatter(socketid: String): CreateSocketResponse

    resetMainPhoto(categoryid: Int): ResetMainPhotoResponse

    updateMainPhoto(itemid: Int): UpdateMainPhotoResponse
  }
`;
