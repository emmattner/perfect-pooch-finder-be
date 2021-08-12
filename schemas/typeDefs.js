const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    confirmPassword: String
    age: String
    livingSpace: String
    yardSize: String
    exerciseHours: String
    foodCost: String
    dogSize: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Breed {
    breed: String
    bredFor: String
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
    findBreed(breed: String, bredFor: String, minWeight: Float, maxWeight: Float, temperament: String, minHeight: Float, maxHeight: Float, group: String, foodLevel: Float, countryOfOrigin: String, lifespan: String): Breed
  }

  
  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!, confirmPassword: String!, age: String!, livingSpace: String!, yardSize: String!, exerciseHours: String!, foodCost: String!, dogSize: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String!, confirmPassword: String, age: String, livingSpace: String, yardSize: String, exerciseHours: String, foodCost: String, dogSize: String): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
