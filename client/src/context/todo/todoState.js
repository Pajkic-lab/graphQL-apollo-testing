import React, { useReducer } from 'react'
import todoContext from './todoContext'
import todoReducer from './todoReducer'
import { ADD_TODO, REMOVE_TODO, ADD_TODOS } from '../types'

const TodoState = props => {
    const initState = {
        todos: []
    }

    const [state, dispatch] = useReducer(todoReducer, initState)

    const addTodo = (data) => {
        const {todo, _id} = data.createTodo
        dispatch({
            type: ADD_TODO,
            payload: { todo, _id }
        })
    }

    const removeTodo = (data) => {
        const { id } = data.deleteTodo
        dispatch({
            type: REMOVE_TODO,
            payload: id
        })
    }

    const fatchAllTodos = ({data}) => {
        const {getAllTodos} = data
        console.log(getAllTodos)
        dispatch({
            type: ADD_TODOS,
            payload: getAllTodos
        })
    }
    return (
        <todoContext.Provider
        value={{
            addTodo: addTodo,
            removeTodo: removeTodo,
            fatchAllTodos: fatchAllTodos,
            todos: state.todos
        }}
        >
            { props.children }
        </todoContext.Provider>
    )
}

export default TodoState
