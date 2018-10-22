import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

export default class News extends Component {
    state = {
        newsArr: [
            'news 001',
            'news 002',
            'news 003',
        ]
    }
    render() {
        return (
            <ul>
                {
                    this.state.newsArr.map((news, index) => {
                        return (
                            <li key={index}>{news}</li>
                        )
                    })
                }
            </ul>
        )
    }
}