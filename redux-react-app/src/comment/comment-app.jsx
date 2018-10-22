import React, {Component} from 'react'
import CommentList from './comment-list'
import CommentAdd from './comment-add'
import './bootstrap.min.css'
import Pubsub from 'pubsub-js'

class App extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = [
  //     {username: 'Tom', content: 'React厉害啊'},
  //     {username: 'Jack', content: 'React不容易'}
  //   ]
  // }
  state = {
    comments: [
      {username: 'Tom', content: 'React厉害啊'},
      {username: 'Jack', content: 'React不容易'}
    ]
  }
  componentDidMount() {
    Pubsub.subscribe('deleteComment', (msg, index) => {
      this.delComment(index)
      console.log(msg)
    })
  }
  addComment = (comment) => {
    const {comments} = this.state
    comments.unshift(comment)
    this.setState({comments})
  }
  delComment = (index) => {
    const {comments} = this.state
    comments.splice(index, 1)
    this.setState({comments})
  }
  render() {
    const {comments} = this.state
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
            <CommentAdd addComment={this.addComment}></CommentAdd>
            <CommentList comments={comments}></CommentList>
          </div>
        </div>
      </div>
    )
  }
}

export default App