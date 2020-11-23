import { gql } from "apollo-server-express";

export const PriceOptionsProfile = gql`
  type PriceOptions {
    id: ID
    hairlength: String
    itemid: Int
    price: Float
  }
`;
