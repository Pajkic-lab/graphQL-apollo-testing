import React, { useContext, useEffect, Fragment, useState } from 'react'
import AuthContext from '../context/auth/authContext'
import { useMutation } from '@apollo/client'
import { GET_USER } from '../graphql'


const MainPage = ({history}) => {

    const [formData, setFormData] = useState({
        todo: ''
    })

    const {todo} = formData
    
    const onChange = e => {setFormData({
        ...formData, [e.target.name]: e.target.value
    })}

    const onSubmit = e => {
        e.preventDefault()
        //addTodo()
    }

    const authContext = useContext(AuthContext)
    const { loadUser, logout, user } = authContext
    const token = authContext.token

    useEffect( ()=>{
        async function fetchData() {
        const {data} = await getUser({variables: {token}})  
        loadUser(data)
        }
        fetchData()
    }, [])

    const [getUser] = useMutation(GET_USER)

    return (
        <div>
            <h1>MAIN PAGE</h1> <br/>
            <h1>{user && user.name}</h1>
            <button onClick={()=>logout(history)}>LOGOUT</button> <br /> <br />

            <Fragment>
                <form onSubmit={onSubmit}>
                    <input onChange={onChange} placeholder='Add Todo' name='todo' value={todo} required /> <br/>
                    <button>ADD</button>
                </form>
            </Fragment>
        </div>
    )
}

export default MainPage