import React, {Component} from 'react'

const allMessages = [
    {id: 1, title: 'message 001', Content: '123456'},
    {id: 2, title: 'message 002', Content: '556464'},
    {id: 3, title: 'message 003', Content: '99999'},
]
export default function MessageDetail(props) {
    const {id} = props.match.params
    const message = allMessages.find((m) => m.id === id*1)
    return (
        <ul>
            <li>ID: {message.id}</li>
            <li>Title: {message.title}</li>
            <li>Content: {message.message}</li>
        </ul>
    )
}