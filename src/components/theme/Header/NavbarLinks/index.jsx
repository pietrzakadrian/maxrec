import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Wrapper } from './styles';

const NavbarLinks = ({ desktop }) => (
  <Wrapper desktop={desktop}>
    <AnchorLink href="#about">O nas</AnchorLink>
    <AnchorLink href="#projects">Teledyski</AnchorLink>
    <AnchorLink href="#contact">Film</AnchorLink>
    <AnchorLink href="#contact">Kontakt</AnchorLink>
  </Wrapper>
);

export default NavbarLinks;
