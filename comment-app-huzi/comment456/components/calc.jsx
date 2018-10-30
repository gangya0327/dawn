import React, { Component } from 'react'

class Input extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num: 0 
        }
    }
    handleChange(e) {
        this.setState({num: e.target.value})
        if(this.props.onChange) {
            this.props.onChange(e.target.value)
        }
    }
    render() {
        return (
            <div>
                <input type='number' onChange={this.handleChange.bind(this)} value={this.state.num}/>
            </div>
        )
    }
}

class PercentageShower extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>{this.props.num}%</div>
        )
    }
}

class PercentageApp extends Component {
    constructor() {
        super()
        this.state = {
            num: 0
        }
    }
    handleCalc(num) {
        let newNum = Number(num*100).toFixed(2)
        this.setState({num: newNum})
    }
    render() {
        return (
            <div>
                <Input onChange={this.handleCalc.bind(this)}/>
                <PercentageShower num={this.state.num}/>
            </div>
        )
    }
}


export default PercentageApp