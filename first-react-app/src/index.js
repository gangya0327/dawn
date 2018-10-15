import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import ClickCounter from './ch01/ClickCounter';
// import ControlPanel from './ch02/ControlPanel';
// import ControlPanel from './ch03/flux/views/ControlPanel';
// import ControlPanel from './ch03/redux_basic/views/ControlPanel';
// import MyRef from './ch03/my_ref/MyRef';
// import MyTodo from './ch03/my_todo/MyTodo';
// import MyForm from './ch03/my_form/MyForm';
// import LifeCycle from './ch03/My_lifecycle/LifeCycle';
// import App from './ch03/my_comment/comment-app';
// import MostStarRepo from './ch03/my_axios/MostStarRepo';
// import SearchApp from './ch03/my_search/search-app';
import SearchApp from './ch03/my_search2/search-app';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<SearchApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
