import { gql } from "apollo-server-express";
export const ChatUserProfile = gql`
  type ChatUser {
    id: ID
    name: String
    email: String
    isadmin: Int
    active: Int
    socketid: String
  }
`;
export const socketProfile = gql`
  type socket {
    socketid: String
  }
`;
export const CreateChatUserResponse = gql`
  type CreateChatUserResponse {
    message: String!
    ChatUser: ChatUser
  }
`;
export const CreateSocketResponse = gql`
  type CreateSocketResponse {
    message: String!
    Socket: socket
  }
`;
