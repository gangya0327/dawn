import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import ClickCounter from './ch01/ClickCounter';
// import ControlPanel from './ch02/ControlPanel';
import ControlPanel from './ch03/flux/views/ControlPanel';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<ControlPanel />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
