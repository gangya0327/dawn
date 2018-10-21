import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import ClickCounter from './ch01/ClickCounter';
// import ControlPanel from './ch02/ControlPanel';
// import ControlPanel from './ch03/redux_flux/views/ControlPanel';
// import ControlPanel from './ch03/redux_basic/views/ControlPanel';
// import MyRef from './ch03/my_ref/MyRef';
// import MyTodo from './ch03/my_todo/MyTodo';
// import MyForm from './ch03/my_form/MyForm';
// import LifeCycle from './ch03/My_lifecycle/LifeCycle';
// import App from './ch03/my_comment/comment-app';
// import MostStarRepo from './ch03/my_axios/MostStarRepo';
// import SearchApp from './ch03/my_search/search-app';
// import SearchApp from './ch03/my_search2/search-app';
// import ControlPanel from './ch03/redux_smart_dumb/view/ControlPanel';
// import App from './ch03/redux_with_context/App';
// import App from './ch03/react-redux/App';
// import SearchApp from './ch03/my_search3/search-app';
// import App from './ch03/my_comment2/comment-app';
import App from './ch03/my_antd_ui/components/app';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();