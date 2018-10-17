import React, {Component} from 'react'
import Son from './son'

class Father extends Component {
    render() {
        return (
            <div>1234</div>
        )
    }
}

class FatherMan extends Component {
    render() {
        return (
            <Son age="35"></Son>
        )
    }
}

export default FatherMan