import React, {Component} from 'react'

class MyRef extends Component {
    constructor(props) {
        super(props)
        this.showInput = this.showInput.bind(this)
    }
    showInput() {
        alert(this.input.value)
    }
    render() {
        return (
            <div>
                <input type='text' ref={ input => this.input = input }></input>
                &nbsp;&nbsp;
                <input type='text' ref={ input1 => this.input1 = input1 }></input>
                &nbsp;&nbsp;
                <button onClick={this.showInput}>点击提示内容</button>
            </div>
        )
    }
}

export default MyRef