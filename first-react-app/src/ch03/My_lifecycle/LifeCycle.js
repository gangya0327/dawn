import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class LifeCycle extends Component {
    constructor(props) {
        super(props)
        this.destroyWord = this.destroyWord.bind(this)
        this.state = {
            opacity: 1,
            date: new Date()
        }
    }
    componentDidMount() {
        this.intervalID = setInterval(function(){
            console.log('执行')
            let {opacity} = this.state
            opacity -= 0.1
            if(opacity <= 0){
                opacity = 1
            }
            this.setState({opacity})
        }.bind(this), 200)
        setInterval(()=>{
            this.setState({
                date: new Date()
            })
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.intervalID)
    }
    destroyWord() {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }
    render() {
        const {opacity} = this.state
        return (
            <div>
                <h2 style={{opacity: opacity}}>{this.props.msg}</h2>
                <button onClick={this.destroyWord}>隐藏文字</button>
                <p>现在时间是 {this.state.date.toTimeString()}</p>
            </div>
        )
    }
}

export default LifeCycle