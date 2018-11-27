import React from 'react'
import ReactDOM from 'react-dom'
import DataBinder from '@icedesign/data-binder'

@DataBinder({
    person: {
        url: 'https://www.easy-mock.com/mock/5b2311e66bed703a9b488c7f/example/query',
        type: 'get',
        defaultBindData: {
            name: 'noname',
            age: 0,
            addres: 'nowhere',
            ablity: 'none'
        },
    }
})

class DataBinders extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const person = this.props.bindingData
        console.log(this.props.bindingData)
        return (
            <div>
                <p>姓名：{person.name}</p>
                <p>年龄：{person.age}</p>
            </div>
        )
    }
}

export default DataBinders

// ReactDOM.render((
//     <DataBinders />
//   ), document.getElementById('root'));