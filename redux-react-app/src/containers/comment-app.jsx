import React, {Component} from 'react'
import CommentList from '../comments/comment-list'
import CommentAdd from '../comments/comment-add'
import '../comments/bootstrap.min.css'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {addComment, delComment, getComments} from '../redux/actions'

class App extends Component {
  static propTypes = {
    comments: PropTypes.array.isRequired,
    addComment: PropTypes.func.isRequired,
    delComment: PropTypes.func.isRequired,
    getComments: PropTypes.func.isRequired
  }
  componentDidMount() {
    this.props.getComments()
  }
  render() {
    const {comments, addComment, delComment} = this.props
    return (
      <div>
        <header className='site-header jumbotron'>
          <div className='container'>
            <div className='row'>
              <div className='col-xs-12'>
                <h1>请发表评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className='container'>
          <div className="row">
            <CommentAdd addComment={addComment}></CommentAdd>
            <CommentList comments={comments} delComment={delComment}></CommentList>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({comments: state}),
  {addComment, delComment, getComments}
)(App)