import React, { useReducer } from 'react'
import authContext from './authContext'
import authReducer from './authReducer'
import { REGISTER_SUCCESS } from '../types'



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

    const getData = () => {}

    return (
        <authContext.Provider
        value={{
          register: register,
          getData: getData,
          user: state.user
        }}
        >
          { props.children }
        </authContext.Provider>
    )
}

export default AuthState


