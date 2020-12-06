import { gql } from "apollo-server-express";

export const PhotoProfile = gql`
  type Photos {
    itemid: ID
    option: String
    photo: String
    categoryid: Int
    mainphoto: Int
  }
`;
