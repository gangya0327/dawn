import React, {Component} from 'react'
import Counter from './Counter'

const style = {
    margin: '20px'
}

class ControlPanel extends Component {
    constructor(props) {
        super(props)
        this.onCounterUpdate = this.onCounterUpdate.bind(this)
        this.initValues = [0,10,20]
        const initSum = this.initValues.reduce( (a,b) => a+b,0 )
        this.state = {
            sum: initSum
        }
    }
    onCounterUpdate(newValue, previousValue) {
        const valueChange = newValue - previousValue
        this.setState({
            sum: this.state.sum + valueChange
        })
    }
    render() {
        return (
            <div style={style}>
                <Counter caption='First' onUpdate={this.onCounterUpdate}></Counter>
                <Counter caption='Second' onUpdate={this.onCounterUpdate} initValue={this.initValues[1]}></Counter>
                <Counter caption='Third' onUpdate={this.onCounterUpdate} initValue={this.initValues[2]}></Counter>
                <hr></hr>
                <div>Total Count: {this.state.sum}</div>
            </div>
        )
    }
}

export default ControlPanel