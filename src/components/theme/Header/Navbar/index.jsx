import React from 'react';
import { Link } from 'gatsby';
import { Container } from 'components/common';
import logo from 'assets/logos/masylogofont.png';
import NavbarLinks from '../NavbarLinks';
import { Wrapper } from './styles';

const Navbar = () => (
  <header>
    <Wrapper as={Container}>
      <Link to="/">
        <img src={logo} alt="Maksymilian Grela" />
      </Link>
      <NavbarLinks desktop />
    </Wrapper>
  </header>
);

export default Navbar;
