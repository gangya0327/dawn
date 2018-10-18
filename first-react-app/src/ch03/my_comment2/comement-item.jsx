import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './comment-item.css'
import Pubsub from 'pubsub-js'

class CommentItem extends Component {
  static propTypes = {
    comment: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
  }
  handleClick = () => {
    const {comment, index} = this.props
    if(window.confirm(`确定删除${comment.username}的评论吗？`)) {
      // delComment(index)
      Pubsub.publish('deleteComment', index)
    }
  }
  render() {
    const {comment} = this.props
    return (
      <li className='list-group-item'>
        <div className='handle'>
          <a href="javascript:;" onClick={this.handleClick}>删除</a>
        </div>
        <p className='user'><span>{comment.username}</span><span>说：</span></p>
        <p className='centence'>{comment.content}</p>
      </li>
    )
    
  }
}

export default CommentItem