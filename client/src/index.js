import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';
import App from './components/app.js';
import Signin from './components/auth/signin.js'
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
	<Provider store={ createStoreWithMiddleware(reducers) }>
		<Router history={ browserHistory }>
			<Route path='/' component={ App }>
				<Route path='signin' component={ Signin } />
			</Route>
		</Router>
	</Provider>, 
	document.querySelector('.container')
);