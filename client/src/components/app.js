import React, { Component } from 'react';
import NavBarHeader from './Nav.js'
import Video from './video/video.js';

export default class App extends Component {
	render(){
		return (
			<div>
				<NavBarHeader />
				<Video />
			</div>
		);
	}
}