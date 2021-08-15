const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    age: String
    temperament: String
    dogSize: String
    dogType: String
    foodCost: Int
  }

  type Auth {
    token: ID
    user: User
  }

  type Breed {
    breed: String
    bredFor: String
    image: String
    minWeight: Float
    maxWeight: Float
    temperament: String
    minHeight: Float
    maxHeight: Float
    group: String
    foodLevel: String
    countryOfOrigin: String
    lifespan: String
  }

  type Query {
    user: User
    allBreeds: [Breed]
    breedsByUser: [Breed]
  }

  
  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!, age: String!, dogType: String!, temperament: String!, foodCost: Int!, dogSize: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String!, age: String, dogType: String, temperament: String, foodCost: Int, dogSize: String): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
