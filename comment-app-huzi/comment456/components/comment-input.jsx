import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class CommentInput extends Component {
    static propTypes = {
        onSubmit: PropTypes.func
    }
    constructor() {
        super()
        this.state = {
            username: '',
            content: ''
        }        
    }
    componentDidMount() {
        this.textarea.focus()
    }
    componentWillMount() {
        this._loadName()
    }
    handleChangeName(event) {
        this.setState({ username: event.target.value })
    }
    handleChangeContent(event) {
        this.setState({ content: event.target.value })
    }
    handleSubmit() {
        if(this.props.onSubmit) {
            this.props.onSubmit({
                username: this.state.username,
                content: this.state.content,
                createTime: +new Date()
            })
            this.setState({content: ''})
        }
    }
    handleBlur(event) {
        this._saveName(event.target.value)
    }
    _saveName(name) {
        localStorage.setItem("username", name)
    }
    _loadName() {
        const username = localStorage.getItem('username')
        if(username){
            this.setState({username: username})
        }
    }
    render() {
        return (
            <div className='comment-input'>
                <div className="comment-field">
                    <span className="comment-field-name">用户名</span>
                    <div className="comment-field-input">
                        <input type="text" 
                            value={this.state.username} 
                            onChange={this.handleChangeName.bind(this)}
                            onBlur={this.handleBlur.bind(this)} />
                    </div>
                </div>
                <div className="comment-field">
                    <span className="comment-field-name">评价内容</span>
                    <div className="comment-field-input">
                        <textarea ref={textarea => {this.textarea = textarea}}
                            value={this.state.content} 
                            onChange={this.handleChangeContent.bind(this)}>
                        </textarea>
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
