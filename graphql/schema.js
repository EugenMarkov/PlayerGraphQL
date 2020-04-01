const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    getMovies: [Movie]!
  }
  
  type Mutation {
  createUser(name: String!, email: String!, password: String!): NewUserResponse
  loginUser(email: String!, password: String!): LoginUserResponse
  addMovie(name: String!, url: String!): MovieResponse
  updateMovie(id: ID!, startPoint: Int!): MovieResponse
  playMovie(id: ID!): MovieResponse
  stopMovie(id: ID!): MovieResponse
  }
  
  type NewUserResponse {
  user: User
  status: String!
  message: String!
  }
  
  type LoginUserResponse {
  user: User
  status: String!
  message: String!
  token: String # login token
  }
  
  type MovieResponse {
  status: String!
  message: String!
  }
  
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
    isWatching: Boolean!
  }
  type Movie {
    id: ID!
    name: String!
    url: String!
    startPoint: Int
  }
`;

module.exports = typeDefs;
