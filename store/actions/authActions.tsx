import { REGISTER_USER, LOGIN_USER } from '../types'
import { User } from '../../utils/interfaces'

const registerUser = (user: User) => {
    return {
        type: REGISTER_USER,
        payload: user
    }
}

const loginUser = (user: User) => {
    return {
        type: LOGIN_USER,
        payload: user
    }
}

export {
    registerUser,
    loginUser
}