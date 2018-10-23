// 包含n个reducer函数，根据老的state和action返回一个新的state
import {ADD_COMMENT, DEL_COMMENT, RECEIVE_COMMENTS} from './action-types'

const initComments = []

export function comments(state=initComments, action) {
    switch(action.type) {
        case ADD_COMMENT: 
            return [action.data, ...state]
        case DEL_COMMENT:
            return state.filter((comment, index) => index !== action.data)
        case RECEIVE_COMMENTS:
            return action.data
        default: 
        return state
    }
}