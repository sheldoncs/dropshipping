import { gql } from "apollo-server-express";

export const userMutation = gql`
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

    addChatUser(
      name: String
      email: String
      isadmin: Int
      active: Int
    ): CreateChatUserResponse

    addLastIdentity(lastidentityid: Int): CreateLastIdentityResponse

    deactivateActiveChatter(socketid: String): CreateSocketResponse
  }
`;
