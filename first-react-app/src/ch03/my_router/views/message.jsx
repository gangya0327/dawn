import React, {Component} from 'react'
import {Route, NavLink} from 'react-router-dom'
import MessageDetail from './message-detail'

export default class News extends Component {
    state = {
        messages: [
            // {id: 1, title: 'message 001'},
            // {id: 2, title: 'message 002'},
            // {id: 3, title: 'message 003'},
        ]
    }
    componentDidMount() {
        setTimeout(() => {
            const messages = [
                {id: 1, title: 'message 001'},
                {id: 2, title: 'message 002'},
                {id: 3, title: 'message 003'},
            ]
            this.setState({messages})
        }, 1000)
    }
    showDetail = (id) => {
        this.props.history.push(`/home/message/messagedetail/${id}`)
    }
    showDetail2 = (id) => {
        this.props.history.replace(`/home/message/messagedetail/${id}`)
    }
    goForward = () => {
        this.props.history.goForward()
    }
    goBack = () => {
        this.props.history.goBack()
    }
    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.messages.map((m, index) => {
                            return (
                                <li key={index}>
                                    <NavLink to={`/home/message/messagedetail/${m.id}`}>{m.title}</NavLink>
                                    {/* <a href={`/home/message/messagedetail/${m.id}`}>{m.title}</a> */}
                                    &nbsp;&nbsp;<button onClick={() => {this.showDetail(m.id)}}>push() 查看消息</button>
                                    &nbsp;&nbsp;<button onClick={() => {this.showDetail2(m.id)}}>replace() 查看消息</button>
                                </li>
                            )
                        })
                    }
                </ul>
                <button onClick={this.goBack}>后退</button>&nbsp;
                <button onClick={this.goForward}>前进</button>
                <Route path='/home/message/messagedetail/:id' component={MessageDetail}></Route>
            </div>
        )
    }
}