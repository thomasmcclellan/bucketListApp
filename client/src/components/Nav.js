import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, DropdownButton, MenuItem, CallapsibleNav } from 'react-bootstrap';

class NavBarHeader extends Component {
	render(){
		return (
			<Navbar>
				<Navbar.Header>
					<Navbar.Brand>
						<a href='#'>bucketLIST</a>
					</Navbar.Brand>
				</Navbar.Header>
				<Nav>
					<NavItem eventKey={ 1 } href='#'>signIN</NavItem>
					<NavItem eventKey={ 2 } href='#'>signUP</NavItem>
					<NavDropdown eventKey={ 3 } title='coolSTUFF' id='basic-nav-dropdown'>
						<MenuItem eventKey={ 3.1 }>action</MenuItem>
						<MenuItem eventKey={ 3.2 }>anotherACTION</MenuItem>
						<MenuItem eventKey={ 3.3 }>somethingELSE</MenuItem>
						<MenuItem divider />
						<MenuItem eventKey={ 3.4 }>separateLINK</MenuItem>
					</NavDropdown>
				</Nav>
			</Navbar>
		);
	}
}
export default NavBarHeader;