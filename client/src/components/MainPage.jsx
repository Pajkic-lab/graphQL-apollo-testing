import React, { useContext, useEffect, Fragment, useState } from 'react'
import AuthContext from '../context/auth/authContext'
import TodoContext from '../context/todo/todoContext'
import { useMutation } from '@apollo/client'
import { GET_USER, CREATE_TODO, DELETE_TODO, GET_ALL_TODOS } from '../graphql'


const MainPage = ({history}) => {

    const [formData, setFormData] = useState({
        todo: ''
    })

    const {todo} = formData

    const authContext = useContext(AuthContext)
    const { loadUser, logout, user, token } = authContext

    const todoContext = useContext(TodoContext)
    const { addTodo, todos, removeTodo, fatchAllTodos } = todoContext
    
    const onChange = e => {setFormData({
        ...formData, [e.target.name]: e.target.value
    })}

    const onSubmit = async e => {
        e.preventDefault()
        const {data} = await createTodo({variables: {token, todo}})
        addTodo(data)
        setFormData({ ...formData, todo: '', todos: [] })
    }

    useEffect( ()=>{
        async function fetchData() {
        const {data} = await getUser({variables: {token}})  
        loadUser(data)
        const povrat = await getAllTodos({variables: {token}})
        fatchAllTodos(povrat)
        }
        fetchData()
        // eslint-disable-next-line
    }, [])

    const click = async (id) => {
        const {data} = await deletTodo({variables: {token, id}})
        removeTodo(data)
    } 

    const [getUser] = useMutation(GET_USER)
    const [createTodo] = useMutation(CREATE_TODO)
    const [deletTodo] = useMutation(DELETE_TODO)
    const [getAllTodos] = useMutation(GET_ALL_TODOS)

    return (
        <div>
            <h1>-TODO LIST-</h1> <br/>
            <h1>{user && user.name}</h1>
            <button onClick={()=>logout(history)}>LOGOUT</button> <br /> <br />

            <Fragment>
                <form onSubmit={onSubmit}>
                    <input onChange={onChange} placeholder='Add Todo' name='todo' value={todo} required /> <br/>
                    <button>ADD</button>
                </form>
            </Fragment>

            <Fragment>
                {todos && todos.map(todo=> <li key={todo._id} onClick={()=> click(todo._id)}>
                    {todo.todo}
                </li>)}
            </Fragment>
        </div>
    )
}

export default MainPage