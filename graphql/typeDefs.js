const { gql } = require('apollo-server')


module.exports = gql`
type User{
    id: ID!
    email: String!
    token: String!
    name: String!
}
type Mutation {
    register( name: String!, email: String!, password: String! ): User!
    login( email: String!, password: String! ): User!
    createPost(body: String!): Post
}
type Query {
    getPost(postId: ID!): Post
}
type Post {
    id: ID!
    body: String!
    name: String!
  }
  `