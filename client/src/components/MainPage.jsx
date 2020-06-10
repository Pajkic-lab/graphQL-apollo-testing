import React, { useContext, useEffect } from 'react'
import AuthContext from '../context/auth/authContext'
import { useMutation } from '@apollo/client'
import { GET_USER } from '../graphql'


const MainPage = ({history}) => {

    const authContext = useContext(AuthContext)
    const { loadUser, logout, user } = authContext
    const token = authContext.token

    useEffect( async ()=>{
        const {data} = await getUser({variables: {token}}) 
        loadUser(data) 
    }, [])

    const [getUser] = useMutation(GET_USER)

    return (
        <div>
            <h1>MAIN PAGE</h1> <br/>
            <h1>{user && user.name}</h1>
            <button onClick={()=>logout(history)}>LOGOUT</button>
        </div>
    )
}

export default MainPage
