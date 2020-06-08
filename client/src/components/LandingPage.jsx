import React, { useState, useContext } from 'react'
import AuthContext from '../context/auth/authContext'
import { useQuery, useMutation } from '@apollo/client'
import { GET_GREETING, REGISTER } from '../graphql'



const LandingPage = props => {
    
    const[formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const authContext = useContext(AuthContext)
    const { register, getData, user } = authContext
    //console.log(user)

    const { name, email, password } = formData

    const onChange= e => {setFormData({
        ...formData, [e.target.name]: e.target.value
    })}

    const onSubmit = async e => {
        e.preventDefault()
        const {data} = await reg({variables: {name, email, password}})
        register(data)
        setFormData({ ...formData, name:'', email: '', password: '' })
    }

    const [reg] = useMutation(REGISTER)
    const getGreetingsPovrat = useQuery(GET_GREETING)

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


/*
const [reg, registerPovrat ] = useMutation(REGISTER, {
        variables: { name, email, password, } 
    })
 */

