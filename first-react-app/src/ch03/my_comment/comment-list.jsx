import React, {Component} from 'react'
import CommentItem from './comement-item'
import PropTypes from 'prop-types'
import './comment-list.css'

class CommentList extends Component {
  static propTypes = {
    comments: PropTypes.array.isRequired,
    delComment: PropTypes.func.isRequired
  }
  render() {
    const {comments, delComment} = this.props
    const display = comments.length === 0 ? 'block' : 'none'
    return (
      <div className='col-md-8'>
        <h3 className='reply'>评论回复：</h3>
        <h2 style={{display}}>暂无评论</h2>
        <ul className='list-group'>
        {
          comments.map((comment, index) => {
            return <CommentItem comment={comment} key={index}
              delComment={delComment} index={index}></CommentItem>
          })        
        }
        </ul>
      </div>
    )
  }
} 

export default CommentList