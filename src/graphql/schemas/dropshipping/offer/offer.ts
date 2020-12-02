import { gql } from "apollo-server-express";

export const OfferProfile = gql`
  type Offer {
    id: ID
    offer: String
    itemdetailsid: Int
    offertype: String
    condition: String
    amount: Int
    width: Int
    code: String
    categoryid: Int
  }
`;
