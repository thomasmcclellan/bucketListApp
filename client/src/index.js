import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';
import App from './components/app.js';
import Signup from './components/auth/signup.js';
import Signin from './components/auth/signin.js';
import Signout from './components/auth/signout.js';
import RequireAuth from './components/auth/require_auth.js';
import ListItems from './components/list/list-items.js'
import ListItem from './components/list/new-list-item.js';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
	<Provider store={ createStoreWithMiddleware(reducers) }>
		<Router history={ browserHistory }>
			<Route path='/' component={ App }>
				<Route path='signup' component={ Signup } />
				<Route path='signin' component={ Signin } />
				<Route path='newitem' component={ RequireAuth(ListItem) } />
				<Route path='items' component={ RequireAuth(ListItems) } />
				<Route path='signout' component={ Signout } />
			</Route>
		</Router>
	</Provider>, 
	document.querySelector('.container')
);









