import { gql } from "apollo-server-express";

export const CategoryProfile = gql`
  type Category {
    id: ID
    category: String
    header: String
    itemCategory: String
    item: String
    photo1: String
  }
`;
export const MenuCategoryProfile = gql`
  type Menu {
    id: ID
    category: String
    comments: String
  }
`;
