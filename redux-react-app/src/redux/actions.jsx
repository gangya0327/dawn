// 包含所有action creator() action的工厂函数
import {ADD_COMMENT, DEL_COMMENT, RECEIVE_COMMENTS} from './action-types'

export const addComment = (comment) => ({
    type: ADD_COMMENT,
    data: comment
})

export const delComment = (index) => ({
    type: DEL_COMMENT,
    data: index
})

//同步接受数据
const receiveComments = (comments) => ({
    type: RECEIVE_COMMENTS,
    data: comments
})

//异步从后台获取数据
export const getComments = () => {
    return dispatch => {
        setTimeout(() => {
            const comments = [
                {username: 'Tom', content: 'React厉害啊'},
                {username: 'Jack', content: 'React不容易'}
            ]
            dispatch(receiveComments(comments))
        }, 2000);
    }
}