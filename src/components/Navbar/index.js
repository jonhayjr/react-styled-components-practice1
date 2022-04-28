import React from 'react';

import {Nav, NavContainer, NavLink} from './NavbarElements';

const Navbar = ({routes}) => {
  return (
    <Nav>
        <NavContainer>
            {routes.map((route, index) => (
                <NavLink key={index} to={route.path}>{route.name}</NavLink>
            ))}
        </NavContainer>
    </Nav>
  )
}

export default Navbar;