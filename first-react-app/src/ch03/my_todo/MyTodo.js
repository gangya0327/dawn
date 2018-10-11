import React, {Component} from 'react'
import PropTypes from 'prop-types'

class MyTodo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: ['苹果', '西瓜', '香蕉']
        }
        this.addTodo = this.addTodo.bind(this)
    }
    addTodo(todo) {
        const {todos} = this.state
        todos.unshift(todo)
        this.setState({todos})
    }
    render() {
        const {todos} = this.state
        return (
            <div>
                <h1>Simple Todo List</h1>
                <Add count={todos.length} addTodo={this.addTodo}></Add>
                <List todos={todos}></List>
            </div>
        )
    }
}

class Add extends Component {
    constructor(props) {
        super(props)
        this.add = this.add.bind(this)
    }
    add() {
        const todo = this.todoInput.value.trim()
        if(!todo) {
            return
        }        
        this.props.addTodo(todo)
        this.todoInput.value = ''
    }
    render() {
        return (
            <div>
                <input type='text' ref={ input => this.todoInput = input}></input>
                <button onClick={this.add}>Add #{this.props.count+1}</button>
            </div>
        )
    }
}

Add.propTypes = {
    count: PropTypes.number.isRequired,
    addTodo: PropTypes.func.isRequired
}

class List extends Component {
    render() {
        const {todos} = this.props
        return (
            <div>
                <ul>
                    {
                        todos.map((todo, index) => {
                            return <li key={index}>{todo}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

List.propTypes = {
    todos: PropTypes.array.isRequired
}

export default MyTodo