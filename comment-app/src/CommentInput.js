import React, {Component} from 'react'

class ComponentInput extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            content: ''
        }
    }
    handleUsernameChange(event) {
        this.setState({
            username: event.target.value
        })
    }
    handleContentChange(event) {
        this.setState({
            content: event.target.value
        })
    }
    handleSubmit() {
        if(this.props.onSubmit){
            //const {username, content} = this.state
            this.props.onSubmit(this.state)
        }
        this.setState({content: ''})
    }
    render() {
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input value={this.state.username} onChange={this.handleUsernameChange.bind(this)}></input>
                    </div>
                </div>
                <div className='comment-field'>
                    <div className='comment-field-name'>评论内容：</div>
                    <div className='comment-field-input'>
                        <textarea value={this.state.content} onChange={this.handleContentChange.bind(this)}></textarea>
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button onClick={this.handleSubmit.bind(this)}>发布</button>
                </div>
            </div>
        )
    }
}

export default ComponentInput