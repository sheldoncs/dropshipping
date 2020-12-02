import { gql } from "apollo-server-express";
export const Query = gql`
  # All database queries
  type Query {
    getCategory(category: String): Category
    getAllCategories: [Menu!]
    getAllOffers: [Offer!]
    getOffer(id: Int): Offer
    getAllItems: [ItemPrice!]
    getPriceOptions: [PriceOptions!]
  }
`;
