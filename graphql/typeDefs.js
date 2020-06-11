const { gql } = require('apollo-server')


module.exports = gql`
type Token {
    token: String
}
type User {
    email: String
    _id: ID
    name: String
}
type Todo {
    _id: ID
    user: ID
    todo: String
}
type Id {
    id: ID
}
type Mutation {
    register( name: String!, email: String!, password: String! ): Token!
    login( email: String!, password: String! ): Token!
    getUser( token: String!): User!
    createTodo( token: String! todo: String!): Todo!
    deleteTodo( token: String! id: String!): Id!
    getAllTodos( token: String!): [Todo]!
}
type Query {
    greeting: String
}
`