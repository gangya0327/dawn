import React, {Component} from 'react'
import {Provider} from 'react-redux'
import ControlPanel from './views/ControlPanel'
import store from './Store'
import './index.css'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ControlPanel></ControlPanel>
            </Provider>
        )
    }
}

export default App