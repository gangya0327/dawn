import React, { Component } from 'react'
import { CommentInput } from './comment-input'
import { CommentList } from './comment-list'

export class App extends Component {
    constructor() {
        super()
        this.state = {
            comments: [
                { 'username': 'john', 'content': 'jane' },
            ]
        }
    }
    handleSubmit(comment) {
        if (!comment) return
        if (!comment.username) return alert('请输入用户名')
        if (!comment.content) return alert('请输入评论内容')
        this.state.comments.unshift(comment)
        this.setState(this.state)
    }
    render() {
        return (
            <div className='wrapper'>
                <CommentInput onSubmit={this.handleSubmit.bind(this)}></CommentInput>
                <CommentList comments={this.state.comments}></CommentList>
            </div>
        )
    }
}

export default App
