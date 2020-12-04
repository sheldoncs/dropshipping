import { gql } from "apollo-server-express";

export const OptionProfile = gql`
  type Option {
    id: ID
    title: String
    option1: String
    option2: String
    option3: String
    option4: String
  }
`;
