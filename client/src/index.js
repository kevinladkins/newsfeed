import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import './styles/index.css';
import {loadSources} from './actions/sourcesActions'
import App from './components/App';
import configureStore from './store/configureStore'
import registerServiceWorker from './registerServiceWorker';

const store = configureStore()

store.dispatch(loadSources())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
