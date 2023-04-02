import { REGISTER_USER, LOGIN_USER } from '../types'
import { User } from '../../utils/interfaces'

interface Action {
    type: string;
    payload: any;
}

const reducer = (state: any = { users: [] }, action: Action) => {
    switch (action.type) {
        case REGISTER_USER: {
            let users: User[] = [...state?.users]
            users.push({
                ...action.payload,
                id: users?.length + 1
            })
            return { ...state, users }
        }
        case LOGIN_USER: {
            return { ...state, user: action.payload }
        }
        default: {
            return state
        }
    }
}

export default reducer