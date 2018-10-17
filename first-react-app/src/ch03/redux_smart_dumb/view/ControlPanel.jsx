import React, {Component} from 'react'
import Counter from './Counter'
import Summary from './Summary'
import '../index.css'

const style = {
    margin: '20px'
}

export default class ControlPanel extends Component {
    render() {
        return (
            <div style={style}>
                <Counter caption='First'></Counter>
                <Counter caption='Second'></Counter>
                <Counter caption='Third'></Counter>            
                <hr/>
                <Summary></Summary>
            </div>
        )
    }
}