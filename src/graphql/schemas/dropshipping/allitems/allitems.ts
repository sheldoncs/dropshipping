import { gql } from "apollo-server-express";

export const ItemProfile = gql`
  type ItemPrice {
    id: ID
    option: String
    photo: String
    itemid: Int
  }
`;
