import React, {Component} from 'react'
import axios from 'axios'

class MostStarRepo extends Component {
    state = {
        repoName: '',
        repoUrl: ''
    }
    componentDidMount() {
        const url = `https://api.github.com/search/repositories?q=r&sort=stars`
        // axios.get(url)
        //     .then(response => {
        //         console.log(response);                
        //         const result = response.data;
        //         const {name, html_url} = result.items[0]
        //         this.setState({
        //             repoName: name,
        //             repoUrl: html_url
        //         })
        //     })
        fetch(url)
            .then(response => {
                return response.json()
            }).then(data => {
                console.log(data);                
                const {name, html_url} = data.items[0]
                this.setState({
                    repoName: name,
                    repoUrl: html_url
                })
            })
    }
    render() {
        const {repoName, repoUrl} = this.state
        if(!repoName) {
            return (
                <h2>Loading...</h2>
            )
        }else {
            return (
                <h2>Most Star Repo is <a href={repoUrl}>{repoName}</a></h2>
            )
        }
    }
}

export default MostStarRepo