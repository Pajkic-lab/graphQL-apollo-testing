import React, { useReducer } from 'react'
import authContext from './authContext'
import authReducer from './authReducer'
import { REGISTER_SUCCESS, LOGIN_SUCCESS, LOGOUT, LOAD_USER } from '../types'



const AuthState = props => {
    const initialState={
        token: localStorage.getItem('token'),
        isAuthenticated: false,
        user: null
    }

    const [state, dispatch] = useReducer(authReducer, initialState)

    const register = (data) => {
        const token = data.register.token
        dispatch({
          type: REGISTER_SUCCESS,
          payload: token
      }) 
    }

    const login = (data) => {
        const token = data.login.token
        dispatch({
          type: LOGIN_SUCCESS,
          payload: token
        })
    }

    const loadUser = ({getUser : {email, name, _id}}) => {
        dispatch({
          type: LOAD_USER,
          payload: {email, name, _id}
        })
    }

    const logout = history => {
        dispatch({
            type: LOGOUT
        })
        history.push('/')
    }

    return (
        <authContext.Provider
        value={{
          register: register,
          login: login,
          loadUser: loadUser,
          logout: logout,
          user: state.user,
          token: state.token,
          isAuthenticated: state.isAuthenticated
        }}
        >
          { props.children }
        </authContext.Provider>
    )
}

export default AuthState


