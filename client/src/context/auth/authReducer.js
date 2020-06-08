import { REGISTER_SUCCESS } from "../types"


export default (state, action) => {
    const {payload} = action
    switch (action.type) {
        case REGISTER_SUCCESS:
            localStorage.setItem('token', payload)
            return {...state, isAuthenticated: true}
    default: return state
    }
}