import React, { useReducer } from 'react'
import authContext from './authContext'
import authReducer from './authReducer'



const AuthState = props => {
    const initialState={
        token: localStorage.getItem('token'),
        isAuthenticated: false,
        user: "testing context?"
    }

    const [state, dispatch] = useReducer(authReducer, initialState)

    const register = (data) => {
        console.log(data)
    }

    const getData = () => {
      
    }

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


