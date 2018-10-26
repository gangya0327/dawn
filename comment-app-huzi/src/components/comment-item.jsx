import React, { Component } from 'react'

export class CommentItem extends Component {
    constructor() {
        super()
        this.state = {
            timeString: ''
        }
    }
    componentWillMount() {
        this._updateTimeString()
    }
    _updateTimeString() {
        const comment = this.props.comment
        console.log(comment)
        const duration = (Date.now() - comment.creatTime)
        console.log(comment.createdTime)
        console.log(duration)
    }
    render() {
        const {comment} = this.props
        return (
            <div className='comment'>
                <div className="comment-user">
                    <span>{comment.username}</span>：
                </div>
                <p>{comment.content}</p>
                <span className="comment-createdTime">
                    {this.state.timeString}
                </span>
            </div>
        )
    }
}

export default CommentItem
