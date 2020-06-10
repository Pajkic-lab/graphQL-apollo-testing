import React from 'react'
import todoContext from './todoContext'

const todoState = () => {
    const initState = {
        todo: null,
        todos: []
    }
    return (
        <todoContext.Provider
        value={{
            a
        }}
        >
            { props.children }
        </todoContext.Provider>
    )
}

export default todoState
