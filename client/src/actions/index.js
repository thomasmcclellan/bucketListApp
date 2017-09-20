import axios from 'axios';

const ROOT_URL = 'http://localhost:3000/';
// const ROOT_URL = 'http://rest.learncode.academy/api/tom'

export const CREATE_POSTS = 'CREATE_POSTS';


export function signinUser({ email, password }){
	return function(dispatch){
		console.log(ROOT_URL, email, password)
		axios.post(`${ ROOT_URL }/signin`, { email, password })
	}
}

export function createPost(props){
	const request = axios.post(`${ ROOT_URL }/posts`, props);
	return {
		type: CREATE_POSTS,
		payload: request
	};
}