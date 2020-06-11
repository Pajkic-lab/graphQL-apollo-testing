import { gql } from '@apollo/client'

export const GET_GREETING = gql`
  query{
      greeting
  }
`
 export const REGISTER = gql`
    mutation register($name: String!, $email: String!, $password: String!) {
        register(name: $name, email: $email, password: $password ) {
            token
        }
    }
`
export const LOGIN = gql`
  mutation login( $email: String!, $password: String! ) {
      login(email: $email, password: $password) {
          token
      }
  }
`
export const GET_USER = gql`
  mutation getUser( $token: String! ) {
      getUser(token: $token) {
          email
          _id
          name
      }
  }
`
export const CREATE_TODO = gql`
  mutation createTodo( $token: String!, $todo: String! ) {
      createTodo( token: $token, todo: $todo ) {
         _id
         user
         todo
      }
  }
`
export const DELETE_TODO = gql`
    mutation deleteTodo( $token: String!, $id: String! ) {
        deleteTodo( token: $token, id: $id ) {
            id
        }
    }
`