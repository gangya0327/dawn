import React, {Component} from 'react'

class MyForm extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    render() {
        return (
            <div>
                <form action='/test' onSubmit={this.handleSubmit}>
                    用户：<input type='text'></input>
                    密码：<input type='password'></input>
                    <input type='submit' value='登录'></input>
                </form>
            </div>
        )
    }
}

export default MyForm