import React, { Component } from 'react'
import { CommentInput } from './comment-input'
import { CommentList } from './comment-list'

export class App extends Component {
    constructor() {
        super()
        this.state = {
            comments: []
        }
    }
    componentWillMount () {
         this._loadComments()
    }    
    handleSubmit(comment) {
        if (!comment) return
        if (!comment.username) return alert('请输入用户名')
        if (!comment.content) return alert('请输入评论内容')
        this.state.comments.push(comment)
        this.setState(this.state)
        this._saveComments()
    }
    _saveComments() {
        localStorage.setItem('comments', JSON.stringify(this.state.comments))
    }
    _loadComments() {
        let comments = JSON.parse(localStorage.getItem('comments'))
        if(comments){
            this.setState({comments: comments})
        }
    }
    handleDeletComment(index) {
        const {comments} = this.state
        comments.splice(index, 1)
        this.setState({comments})
        this._saveComments()
    }
    render() {
        return (
            <div className='wrapper'>
                <CommentInput onSubmit={this.handleSubmit.bind(this)}></CommentInput>
                <CommentList comments={this.state.comments}
                    onDeleteComment={this.handleDeletComment.bind(this)}></CommentList>
            </div>
        )
    }
}

export default App
