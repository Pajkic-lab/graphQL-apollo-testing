import React, { useReducer } from 'react'
import authContext from './authContext'
import authReducer from './authReducer'
import { REGISTER_SUCCESS, LOGIN_SUCCESS, LOGOUT } from '../types'



const AuthState = props => {
    const initialState={
        token: localStorage.getItem('token'),
        isAuthenticated: false,
        user: null
    }

    const [state, dispatch] = useReducer(authReducer, initialState)

    const register = (data, history) => {
        const token = data.register.token
        dispatch({
          type: REGISTER_SUCCESS,
          payload: token
      }) 
      history.push('/mainpage')
    }

    const login = (data, history) => {
        const token = data.login.token
        dispatch({
          type: LOGIN_SUCCESS,
          payload: token
        })
        history.push('/mainpage')
    }

    const logout = () => {
        dispatch({
            type: LOGOUT
        })
    }

    return (
        <authContext.Provider
        value={{
          register: register,
          login: login,
          logout: logout,
          user: state.user
        }}
        >
          { props.children }
        </authContext.Provider>
    )
}

export default AuthState


