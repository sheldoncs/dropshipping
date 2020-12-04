import { gql } from "apollo-server-express";

export const PhotoProfile = gql`
  type Photos {
    id: ID
    option: String
    photo: String
    itemid: Int
    categoryid: Int
    mainphoto: Int
  }
`;
