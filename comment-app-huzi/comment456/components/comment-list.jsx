import React, { Component } from 'react'
import { CommentItem } from './comment-item'
import PropTypes from 'prop-types'

export class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array,
        onDeleteComment: PropTypes.func
    }
    static defaultProps = {
        commments: []
    }
    handleDeleteComment(index) {
        if(this.props.onDeleteComment) {
            this.props.onDeleteComment(index)
        }
    }
    render() {
        const {comments} = this.props
        return (
            <div>
                {
                    comments.map((comment, index) => (
                        <CommentItem comment={comment} key={index} index={index}
                        onDeleteComment={this.handleDeleteComment.bind(this)}></CommentItem>
                    ))
                }
            </div>
        )
    }
}

export default CommentList
