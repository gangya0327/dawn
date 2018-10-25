import React, { Component } from 'react'

export class CommentInput extends Component {
    constructor() {
        super()
        this.state = {
            username: 'peter',
            content: 'helloo'
        }
    }
    handleChangeName(event) {
        this.setState({ username: event.target.value })
    }
    handleChangeContent(event) {
        this.setState({ content: event.target.value })
    }
    handleSubmit() {
        this.props.onSubmit(this.state)
    }
    render() {
        return (
            <div className='comment-input'>
                <div className="comment-field">
                    <span className="comment-field-name">用户名</span>
                    <div className="comment-field-input">
                        <input type="text" value={this.state.username} onChange={this.handleChangeName.bind(this)} />
                    </div>
                </div>
                <div className="comment-field">
                    <span className="comment-field-name">评价内容</span>
                    <div className="comment-field-input">
                        <textarea id="" value={this.state.content} onChange={this.handleChangeContent.bind(this)}></textarea>
                    </div>
                </div>
                <div className="comment-field-button">
                    <button onClick={this.handleSubmit.bind(this)}>发布</button>
                </div>
            </div>
        )
    }
}

export default CommentInput
