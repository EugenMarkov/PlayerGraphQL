import gql from "graphql-tag";

export const typeDefs = gql`
  extend type Query {
    isAuthenticated: Boolean!
  }
`;

export const resolvers = {};
