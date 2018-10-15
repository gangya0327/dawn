import React, {Component} from 'react'
import SearchButton from './search-button'
import SearchMain from './search-main'
import './bootstrap.min.css'
import './index.css'

class SearchApp extends Component {
    state = {
        searchName: ''
    }
    setSearchName = (searchName) => {
        this.searchName = searchName
        this.setState({searchName})
    }
    render() {
        return (
            <div className="container">
                <SearchButton setSearchName={this.setSearchName}></SearchButton>
                <SearchMain searchName={this.state.searchName}></SearchMain>
            </div>
        )
    }
}

export default SearchApp