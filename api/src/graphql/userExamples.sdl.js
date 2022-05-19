export const schema = gql`
  type UserExample {
    id: Int!
    email: String!
    name: String
  }

  type Query {
    userExamples: [UserExample!]! @skipAuth
    userExample(id: Int!): UserExample @skipAuth
  }

  input CreateUserExampleInput {
    email: String!
    name: String
  }

  input UpdateUserExampleInput {
    email: String
    name: String
  }

  type Mutation {
    createUserExample(input: CreateUserExampleInput!): UserExample! @skipAuth
    updateUserExample(id: Int!, input: UpdateUserExampleInput!): UserExample!
      @skipAuth
    deleteUserExample(id: Int!): UserExample! @skipAuth
  }
`
