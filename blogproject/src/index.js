import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

// axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

axios.interceptors.request.use(request => {
    console.log(request);
    // edit request configuration.
    return request;                 // must always return with the request information.
}, error => {
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    console.log(response);
    // edit response configuration.
    return response;                 // must always return with the response information.
}, error => {
    console.log(error);
    return Promise.reject(error);
});
ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
