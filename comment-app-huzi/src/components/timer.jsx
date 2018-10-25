import React, { Component } from 'react'

export class Timer extends Component {
    constructor() {
        super()
        this.state = {
            date: new Date(),
            showTimer: true
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                date: new Date()
            })
        }, 1000);
    }
    showTimer() {
        this.setState({
            showTimer: !this.state.showTimer
        })
    }
    render() {
        return (
            <div>
                {
                    this.state.showTimer
                    ?
                    this.state.date.toLocaleTimeString()
                    :
                    null
                }
                <button onClick={this.showTimer.bind(this)}>隐藏/打开计时器</button>
            </div>
        )
    }
}

export default Timer
