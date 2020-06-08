const { gql } = require('apollo-server')


module.exports = gql`
type Token {
    token: String
}
type Mutation {
    register( name: String!, email: String!, password: String! ): Token!
    login( email: String!, password: String! ): String!
    createPost(body: String!): Post
}
type Query {
    getPost(postId: ID!): Post
    greeting: String
}
type Post {
    id: ID!
    body: String!
    name: String!
  }
  `