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
                                </li>
                            )
                        })
                    }
                </ul>
                <Route path='/home/message/messagedetail/:id' component={MessageDetail}></Route>
            </div>
        )
    }
}