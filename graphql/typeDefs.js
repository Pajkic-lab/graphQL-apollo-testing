const { gql } = require('apollo-server')


module.exports = gql`
type Token {
    token: String
}
type User {
    email: String
    id: ID
    name: String
}
type Mutation {
    register( name: String!, email: String!, password: String! ): Token!
    login( email: String!, password: String! ): Token!
    getUser( token: String! ): User!
}
type Query {
    greeting: String
}
