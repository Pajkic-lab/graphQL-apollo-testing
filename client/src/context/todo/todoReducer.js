import { ADD_TODO } from "../types"

export default (state, action) => {
    const {payload} = action
    switch(action.type) {
        case ADD_TODO:
            return {...state, todos: state.todos.concat(payload)}
    }
}