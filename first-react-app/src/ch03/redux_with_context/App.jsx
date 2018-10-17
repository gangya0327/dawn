import React, {Component} from 'react'
import ControlPanel from './views/ControlPanel'
import Provider from './Provider'
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