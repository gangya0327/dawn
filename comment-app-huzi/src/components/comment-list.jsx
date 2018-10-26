import React, { Component } from 'react'
import { CommentItem } from './comment-item'

export class CommentList extends Component {
    static defaultProps = {
        commments: []
    }   
    render() {
        const {comments} = this.props
        return (
            <div>
                {
                    comments.map((comment, index) => (
                        <CommentItem comment={comment} key={index}></CommentItem>
                    ))
                }
            </div>
        )
    }
}

export default CommentList
