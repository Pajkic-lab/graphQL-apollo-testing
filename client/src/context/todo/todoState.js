import React, { useReducer } from 'react'
import todoContext from './todoContext'
import todoReducer from './todoReducer'
import { ADD_TODO, REMOVE_TODO, ADD_TODOS, LOGOUT } from '../types'

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
        dispatch({
            type: ADD_TODOS,
            payload: getAllTodos
        })
    }

    const removeCache = () => {
        dispatch({
            type: LOGOUT
        })
    }
    return (
        <todoContext.Provider
        value={{
            addTodo: addTodo,
            removeTodo: removeTodo,
            fatchAllTodos: fatchAllTodos,
            removeCache: removeCache,
            todos: state.todos
        }}
        >
            { props.children }
        </todoContext.Provider>
    )
}

export default TodoState
