import React, { useReducer } from 'react'
import authContext from './authContext'
import authReducer from './authReducer'

import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'



const AuthState = props => {
    const initialState={
        token: localStorage.getItem('token'),
        isAuthenticated: false,
        user: null
    }

    const [state, dispatch] = useReducer(authReducer, initialState)

    const register = ({name, email, password}) => {
        console.log(name, email, password)
    }

    return (
        <authContext.Provider
        value={{
          isAuthenticated: state.isAuthenticated,
          register: register
        }}
        >
          { props.children }
        </authContext.Provider>
    )
}

export default AuthState
