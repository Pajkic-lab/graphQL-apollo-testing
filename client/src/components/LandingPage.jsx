import React, { useState, useContext, useEffect } from 'react'
import AuthContext from '../context/auth/authContext'
import { useQuery, useMutation } from '@apollo/client'
import { GET_GREETING, REGISTER, LOGIN, GET_USER } from '../graphql'



const LandingPage = ({history}) => {
    
    const[formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const authContext = useContext(AuthContext)
    const { register, login, isAuthenticated, token, loadUser } = authContext

    const { name, email, password } = formData

    const onChange= e => {setFormData({
        ...formData, [e.target.name]: e.target.value
    })}

    const onRegister = async e => {
        e.preventDefault()
        const {data} = await reg({variables: {name, email, password}})
        register(data)
        setFormData({ ...formData, name:'', email: '', password: '' })
    }

    const onLogin = async e => {
        e.preventDefault()
        const {data} = await log({variables: { email, password }})
        login(data)
        setFormData({ ...formData, name:'', email: '', password: ''})
    }

    useEffect(() => {
        if (isAuthenticated) {
          history.push("/mainpage")
        } 
        // eslint-disable-next-line
      }, [isAuthenticated])

    useEffect( ()=> {
        if(token) {
            async function fetchData() {
            const {data} = await getUser({variables: {token}})
            loadUser(data)
            }
            fetchData()
        }
    })

    const getGreetingsPovrat = useQuery(GET_GREETING)
    const [reg] = useMutation(REGISTER)
    const [log] = useMutation(LOGIN)
    const [getUser] = useMutation(GET_USER)

    return (
        <div>
            <form onSubmit={onRegister}>
                <h1>Register</h1>
                <input onChange={onChange} value={name} name='name' placeholder='name' required /> <br/>
                <input onChange={onChange} value={email} name='email' placeholder='email' required /> <br/>
                <input onChange={onChange} value={password} name='password' placeholder='password' required /> <br/>
                <button>submit</button> <br/>
            </form>


            <form onSubmit={onLogin}>
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

