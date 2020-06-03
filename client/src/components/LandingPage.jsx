import React, { useState, useContext } from 'react'
import AuthContext from '../context/auth/authContext'

import { gql, useMutation } from '@apollo/client'



const LandingPage = props => {
    
    const[formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const authContext = useContext(AuthContext)
    const { register, getData } = authContext

    const { name, email, password } = formData

    const onChange= e => {setFormData({
        ...formData, [e.target.name]: e.target.value
    })}

    const onSubmit = e => {
        e.preventDefault()
        reg()
        //register({name, email, password})
        setFormData({ ...formData, name:'', email: '', password: '' })
    }

    const [reg, {data, loading, error}] = useMutation(REGISTER)
    //console.log(data)

    return (
        <div>
            <form onSubmit={onSubmit}>
                <h1>Register</h1>
                <input onChange={onChange} value={name} name='name' placeholder='name' required /> <br/>
                <input onChange={onChange} value={email} name='email' placeholder='email' required /> <br/>
                <input onChange={onChange} value={password} name='password' placeholder='password' required /> <br/>
                <button>submit</button> <br/>
            </form>


            <form>
                <h1>Login</h1>
                <input onChange={onChange} value={email} name='email' placeholder='email' required /> <br/>
                <input onChange={onChange} value={password} name='password' placeholder='password' required /> <br/>
                <button>submit</button> <br/>
            </form>
        </div>
    )
}

export default LandingPage


//graphql
const REGISTER = gql`
  mutation register(name: String!, email: String!, password: String!) {}
`