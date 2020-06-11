import { ADD_TODO, REMOVE_TODO } from "../types"

export default (state, action) => {
    const {payload} = action
    switch(action.type) {
        case ADD_TODO:
            return {...state, todos: state.todos.concat(payload)}
        case REMOVE_TODO:
            return {...state, todos: state.todos.filter(todo=> todo.id === payload.id)}
        default: return state
    }
}