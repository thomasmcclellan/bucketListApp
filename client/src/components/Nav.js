import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, DropdownButton, MenuItem, CallapsibleNav } from 'react-bootstrap';

class NavBarHeader extends Component {
	render(){
		return (
			<Navbar>
				<Navbar.Header>
					<Navbar.Brand>
						<a href='#'>BUCKETList</a>
					</Navbar.Brand>
				</Navbar.Header>
				<Nav>
					<NavItem eventKey={ 1 } href='#'>SIGN In</NavItem>
					<NavItem eventKey={ 2 } href='#'>SIGN Up</NavItem>
					<NavDropdown eventKey={ 3 } title='COOL Stuff' id='basic-nav-dropdown'>
						<MenuItem eventKey={ 3.1 }>Action</MenuItem>
						<MenuItem eventKey={ 3.2 }>Another Action</MenuItem>
						<MenuItem eventKey={ 3.3 }>Something else here...</MenuItem>
						<MenuItem divider />
						<MenuItem eventKey={ 3.4 }>Separate Link</MenuItem>
					</NavDropdown>
				</Nav>
			</Navbar>
		);
	}
}
export default NavBarHeader;