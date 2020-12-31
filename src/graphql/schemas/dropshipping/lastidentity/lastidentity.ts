import { gql } from "apollo-server-express";

export const maxIdentityProfile = gql`
  type MaxIdentity {
    maxidentityid: Int
  }
`;
export const lastIdentityProfile = gql`
  type LastIdentity {
    lastidentityid: Int
  }
`;
export const CreateLastIdentityResponse = gql`
  type CreateLastIdentityResponse {
    message: String!
    LastIdentity: LastIdentity
  }
`;
