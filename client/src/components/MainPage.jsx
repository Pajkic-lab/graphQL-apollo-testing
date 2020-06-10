import React, { useContext, useEffect } from 'react'
import AuthContext from '../context/auth/authContext'
import { useMutation } from '@apollo/client'
import { GET_USER } from '../graphql'


const MainPage = () => {

    const authContext = useContext(AuthContext)
    const { loadUser, logout } = authContext
    let token = JSON.stringify(authContext.token)

    useEffect( ()=>{
        getUser() 
        //loadUser(data)
    }, [])

    const [getUser] = useMutation(GET_USER, {
        variables: {token}
    })

    //console.log(getUserPovrat)

    return (
        <div>
            <h1>MAIN PAGE</h1> <br/>
            <button onClick={()=>logout()}>LOGOUT</button>
        </div>
    )
}

export default MainPage
