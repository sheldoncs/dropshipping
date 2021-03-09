import { gql } from "apollo-server-express";

export const ItemProfile = gql`
  type ItemPrice {
    id: ID
    option: String
    photo: String
    itemid: Int
    categoryid: Int
    price: Float
  }
`;
export const ResetMainPhotoProfile = gql`
  type CategoryReset {
    categoryid: Int
  }
`;
export const UpdateMainPhotoProfile = gql`
  type UpdateItem {
    itemid: Int
  }
`;
export const ItemAndCategoryProfile = gql`
  type ItemAndCategory {
    option: String
    category: String
  }
`;
export const ResetMainPhotoResponse = gql`
  type ResetMainPhotoResponse {
    message: String!
    Category: CategoryReset
  }
`;
export const UpdateMainPhotoResponse = gql`
  type UpdateMainPhotoResponse {
    message: String!
    UpdateItem: UpdateItem
  }
`;
