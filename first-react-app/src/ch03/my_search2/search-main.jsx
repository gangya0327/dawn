import React, {Component} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

class SearchMain extends Component {
    static propTypes = {
        searchName: PropTypes.string.isRequired
    }
    state = {
        initView: true,
        loading: false,
        users: null,
        errorMsg: null
    }
    componentWillReceiveProps(newProps) {
        const {searchName} = newProps
        this.setState({
            initView: false,
            loading: true
        })
        const url = `https://api.github.com/search/users?q=${searchName}`
        axios.get(url)
            .then(response => {
                const result = response.data
                console.log(result)
                const users = result.items.map(item => {
                    return {
                        name: item.login,
                        url: item.html_url,
                        avatarUrl: item.avatar_url
                    }
                })
                this.setState({
                    loading: false,
                    users
                })
            })
            .catch(error => {
                this.setState({
                    loading: false,
                    errorMsg: error.message
                })
            })
    }
    //https://github.com/reactjs
    //https://avatars.githubusercontent.com/u/6412038?v=3
    render() {
        const {initView, loading, users, errorMsg} = this.state
        const {searchName} = this.props
        console.log("render() ", searchName);
        
        if(initView) {
            return <h2>请输入关键字搜索</h2>
        }else if(loading) {
            return <h2>正在请求中...</h2>
        }else if(errorMsg) {
            return <h2>{errorMsg}</h2>
        }else {
            return (
                <div className="row">
                    
                    {
                        users.map((user, index) => (
                        <div className="card" key={index}>
                            <a href={user.url} target="_blank">
                                <img src={user.avatarUrl} style={{width: 100}}/>
                            </a>
                            <p className="card-text">{user.name}</p>
                        </div>
                        ))
                    }              
                </div>
            )
        }
    }
}

export default SearchMain