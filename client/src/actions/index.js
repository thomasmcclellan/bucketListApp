import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, UNAUTH_USER } from './types.js';
import authReducer from '../reducers/auth_reducer.js';

const ROOT_URL = 'http://localhost:3000';
// const ROOT_URL = 'http://rest.learncode.academy/api/tom'

export const CREATE_POSTS = 'CREATE_POSTS';


export function signinUser({ email, password }){
	return function(dispatch){
		console.log(ROOT_URL, email, password)
		axios.post(`${ ROOT_URL }/signin`, { email, password })
			.then(response => {
				//This only kickstarts if the request was good...
				//We now update the state to indicate authenticated user
				dispatch({ type: AUTH_USER });
				//This will put the token in localStorage.  It's safe!!
				localStorage.setItem('token', response.data.token);
				//This sends us off to the /newitem view
				browserHistory.push('/newitem');
			})
			.catch(() => {

			});
	}
}

export function createPost(props){
	const request = axios.post(`${ ROOT_URL }/posts`, props);
	return {
		type: CREATE_POSTS,
		payload: request
	};
}