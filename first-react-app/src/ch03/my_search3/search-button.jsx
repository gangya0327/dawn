import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Pubsub from 'pubsub-js'

class SearchButton extends Component {
    search = () => {
        const searchName = this.searchInput.value.trim()
        if(searchName) {
            Pubsub.publish('search', searchName)
        }
    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input type="text" placeholder="enter the name you search" ref={input => this.searchInput = input}/>
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
}

export default SearchButton