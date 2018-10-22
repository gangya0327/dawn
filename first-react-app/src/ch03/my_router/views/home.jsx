import React, {Component} from 'react'
import MyNavLink from '../component/MyNavLink'
import {NavLink, Switch, Route, Redirect} from 'react-router-dom'
import News from '../views/news'
import Message from '../views/message'

export default class Home extends Component {
    render() {
        return (
            <div>
                <h2>Home React Route</h2>
                <div>
                    <ul className="nav nav-tabs">
                        <li>
                            <MyNavLink to='/home/news'>News</MyNavLink>
                        </li>
                        <li>
                            <MyNavLink to='/home/message'>Message</MyNavLink>
                        </li>
                    </ul>
                    <div className="list-group">
                            <MyNavLink className='list-group-item' to='/home/news'>About</MyNavLink>
                            <MyNavLink className='list-group-item' to='/home/message'>Home</MyNavLink>
                        </div>
                    <div>
                        <Switch>
                            <Route path='/home/news' component={News}/>
                            <Route path='/home/message' component={Message}/>
                            <Redirect to='/home/news'></Redirect>                            
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}