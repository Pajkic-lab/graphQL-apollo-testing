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