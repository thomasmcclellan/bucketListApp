import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';
import App from './components/app.js';
import Signin from './components/auth/signin.js'
import reducers from './reducers';
import NewItem from './list/new-list-item.js'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
	<Provider store={ createStoreWithMiddleware(reducers) }>
		<Router history={ browserHistory }>
			<Route path='/' component={ App }>
				<Route path='signin' component={ Signin } />
				<Route path='newitem' component={ NewItem } />
			</Route>
		</Router>
	</Provider>, 
	document.querySelector('.container')
);









