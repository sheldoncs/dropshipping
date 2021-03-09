import { gql } from "apollo-server-express";

export const OrderProfile = gql`
  type Order {
    id: ID
    itemid: Int
    categoryid: Int
    orderid: Int
    quantity: Int
    totalprice: Float
    photo: String
  }
`;
export const CreateOrderResponse = gql`
  type CreateOrderResponse {
    message: String!
    Order: Order
  }
`;
