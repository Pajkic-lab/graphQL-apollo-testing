import React, { useReducer } from 'react'
import authContext from './authContext'
import authReducer from './authReducer'



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

    const getData = () => {
      
    }

    return (
        <authContext.Provider
        value={{
          register: register,
          getData: getData
        }}
        >
          { props.children }
        </authContext.Provider>
    )
}

export default AuthState


