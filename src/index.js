import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import routers from './routers'


ReactDOM.render(
    <div>
        {routers}
    </div>, 
    document.getElementById('root')
);
registerServiceWorker();
