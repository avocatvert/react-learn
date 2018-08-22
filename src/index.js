import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
<<<<<<< HEAD
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
=======
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App title="Relevant persons" />, document.getElementById('root'));
>>>>>>> ec1d48a88a26fa0dee21b2a6e8257ea41115037e
registerServiceWorker();
