import { ADD_TODO, REMOVE_TODO, ADD_TODOS, LOGOUT } from "../types"

export default (state, action) => {
    const {payload} = action
    switch(action.type) {
        case ADD_TODO:
            return {...state, todos: state.todos.concat(payload)}
        case REMOVE_TODO:
            return {...state, todos: state.todos.filter(todo=> todo._id !== payload)}
        case ADD_TODOS:
            return { ...state, todos: state.todos.concat(payload) }
        case LOGOUT:
            return{ ...state, todos: [] }
        default: return state
    }
}