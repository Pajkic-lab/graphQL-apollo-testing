import { REGISTER_SUCCESS, LOGIN_SUCCESS, LOGOUT, LOAD_USER } from "../types"


export default (state, action) => {
    const {payload} = action
    switch (action.type) {
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload)
            return {...state, isAuthenticated: true, token: payload}
        case LOGOUT:
            localStorage.removeItem('token')
            return { ...state, isAuthenticated: false, user: null, token: null }
        case LOAD_USER:
            return { ...state, isAuthenticated: true, user: payload }
    default: return state
    }
}