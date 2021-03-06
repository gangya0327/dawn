import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/comment-app';
import Index from './components/context'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <div>
        <App />
        <Index></Index>
    </div>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
