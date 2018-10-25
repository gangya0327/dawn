import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app'
import store from './redux/store'

function render() {
    ReactDOM.render(<App store={store}/>, document.getElementById('root'));
}
render()
store.subscribe(render)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA