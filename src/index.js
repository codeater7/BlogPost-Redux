import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

//Hooking middleware to redux store
const Store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={Store}>
		<App />
	</Provider>,
	document.querySelector('#root')
);
