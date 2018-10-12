import React, {Component} from 'react'

class MyForm extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            pwd: ''
        }
    }
    handleSubmit(event) {
        const name = this.nameInput.value
        const {pwd} = this.state
        alert(`提交的用户名${name}，密码为${pwd}`)
        event.preventDefault()
    }
    handleChange(event) {
        const pwd = event.target.value
        this.setState({pwd})
    }
    render() {
        return (
            <div>
                <form action='/test' onSubmit={this.handleSubmit}>
                    用户：<input type='text' ref={input => this.nameInput = input}></input>
                    密码：<input type='password' value={this.state.pwd} onChange={this.handleChange}></input>
                    <input type='submit' value='登录'></input>
                </form>
            </div>
        )
    }
}

export default MyForm