import React, {Component} from 'react'
import SearchButton from './search-button'
import SearchMain from './search-main'
import './bootstrap.min.css'
import './index.css'

class SearchApp extends Component {
    render() {
        return (
            <div className="container">
                <SearchButton></SearchButton>
                <SearchMain></SearchMain>
            </div>
        )
    }
}

export default SearchApp