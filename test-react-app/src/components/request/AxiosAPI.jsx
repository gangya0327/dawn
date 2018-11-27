import React from 'react'
import axios from 'axios'
export default class AxiosAPI extends React.Component {
    constructor() {
        super()

        const myURL = 'https://www.easy-mock.com/mock/5b2311e66bed703a9b488c7f/example/query'
        axios(myURL).then((response) => {
            console.log("res: ", response.data)
        })
    }
    render() {
        return (
            <div>12414</div>
        )
    }
}