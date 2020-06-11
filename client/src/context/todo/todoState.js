import React, { useReducer } from 'react'
import todoContext from './todoContext'
import todoReducer from './todoReducer'
import { ADD_TODO } from '../types'

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
    return (
        <todoContext.Provider
        value={{
            addTodo: addTodo,
            todos: state.todos
        }}
        >
            { props.children }
        </todoContext.Provider>
    )
}

export default TodoState
