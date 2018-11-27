import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import TabBarExample from './component/listView';
// import TabExample from './component/tabs';
// import FullPage from './components/fullpage/FullpageTest'
// import AxiosAPI from './components/request/AxiosAPI'
import DataBinder from './components/request/DataBindAPI'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<div id="container" style={{padding: 24}}><DataBinder /></div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
