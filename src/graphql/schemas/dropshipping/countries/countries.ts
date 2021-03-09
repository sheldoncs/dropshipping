import { gql } from "apollo-server-express";

export const CountryProfile = gql`
  type Country {
    id: ID
    country_code: String
    country_name: String
  }
`;
