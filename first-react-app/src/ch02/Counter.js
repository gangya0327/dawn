import React, {Component} from 'react'
import PropTypes from 'prop-types'

const buttonStyle = {
    margin: '10px'
}

class Counter extends Component {
    constructor(props) {
        super(props)
        this.onClickIncrementButton = this.onClickIncrementButton.bind(this)
        this.onClickDecrementButton = this.onClickDecrementButton.bind(this)
        this.state = {
            count: props.initValue
        }
    }
    updateCount(isIncrement) {
        const previousValue = this.state.count
        const newValue = isIncrement ? previousValue + 1 : previousValue - 1
        this.setState({
            count: newValue
        })
        this.props.onUpdate(newValue, previousValue)
    }
    onClickIncrementButton() {
        this.updateCount(true)
    }
    onClickDecrementButton() {
        this.updateCount(false)
    }
    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.caption !== this.props.caption) || (nextState.count !== this.state.count)
    }
    render() {
        const {caption}  = this.props
        return (
            <div>
                <button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>
                <button style={buttonStyle} onClick={this.onClickDecrementButton}>-</button>
                <span>{caption} count: {this.state.count}</span>
            </div>
        )
    }
}

Counter.propTypes = {
    caption: PropTypes.string.isRequired,
    initValue: PropTypes.number,
    onUpdate: PropTypes.func
}

Counter.defaultProps = {
    initValue: 0,
    onUpdate: f => f //默认是一个什么都不做的函数
}

export default Counter