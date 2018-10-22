import React, {Component} from 'react'
import Main from './component/main'
import {BrowserRouter, HashRouter} from 'react-router-dom'
import './bootstrap.css'

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Main></Main>
            </BrowserRouter>
        )
    }
}
