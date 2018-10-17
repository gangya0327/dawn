import React, {Component} from 'react'

class Son extends Component {
    constructor(props) {
        super(props)
        console.log(props)
    }
    render() {
        return (
            <div>888</div>
        )
    }
}

class SonMan extends Component {
    constructor(props) {
        super(props)
        console.log(props)
    }
    render() {
        return (
            <div>777</div>
        )
    }
}

export default SonMan