import { gql } from "apollo-server-express";
export const UserProfile = gql`
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

export const CreateUserResponse = gql`
  type CreateUserResponse {
    message: String!
    User: User
  }
`;
