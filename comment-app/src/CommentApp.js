import React, {Component} from 'react'
import ComponentInput from './CommentInput'
import ComponentList from './CommentList'

class CommentApp extends Component {
    constructor() {
        super()
        this.state = {
            comments: []
        }
    }
    handleSubmitComment(comment) {
        if(!comment) return
        if(!comment.username) return alert("输入用户名")
        if(!comment.content) return alert("输入评论")
        this.state.comments.push(comment)
        this.setState({
            comments: this.state.comments
        })
    }
    render() {
        return (
            <div className='wrapper'>
                <ComponentInput onSubmit={this.handleSubmitComment.bind(this)}></ComponentInput>
                <ComponentList comments={this.state.comments}></ComponentList>
            </div>
        )
    }
}

export default CommentApp