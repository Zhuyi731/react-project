import React from 'react';
import ReactDOM from 'react-dom';
import "babel-polyfill";
import './index.css';
// import * as serviceWorker from './serviceWorker';

class Welcome extends React.Component {
    render() {
        return <h1> Welcome </h1>;
    }
}

ReactDOM.render(
    <Welcome/>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();