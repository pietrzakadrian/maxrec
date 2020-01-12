import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Wrapper } from './styles';

const NavbarLinks = ({ desktop, toggle, sidebar }) => (
  <Wrapper desktop={desktop}>
    <AnchorLink onClick={() => sidebar && toggle && toggle(!sidebar)} href="#about">
      O nas
    </AnchorLink>
    <AnchorLink onClick={() => sidebar && toggle && toggle(!sidebar)} href="#projects">
      Teledyski
    </AnchorLink>
    <AnchorLink onClick={() => sidebar && toggle && toggle(!sidebar)} href="#contact">
      Film
    </AnchorLink>
    <AnchorLink onClick={() => sidebar && toggle && toggle(!sidebar)} href="#contact">
      Kontakt
    </AnchorLink>
  </Wrapper>
);

export default NavbarLinks;
