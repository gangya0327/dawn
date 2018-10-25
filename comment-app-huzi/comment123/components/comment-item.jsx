import React, { Component } from 'react'

export class CommentItem extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {comment} = this.props
        return (
            <div className='comment'>
                <div className="comment-user">
                    <span>{comment.username}</span>：
                </div>
                <p>{comment.content}</p>
            </div>
        )
    }
}

export default CommentItem
