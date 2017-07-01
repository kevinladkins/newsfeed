import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import './styles/index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
