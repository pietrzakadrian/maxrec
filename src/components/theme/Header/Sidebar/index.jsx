import React from 'react';
import NavbarLinks from '../NavbarLinks';
import { Wrapper } from './styles';

const Sidebar = ({ sidebar, toggle }) => (
  <Wrapper active={sidebar} onClick={toggle}>
    <NavbarLinks sidebar={sidebar} toggle={toggle} />
  </Wrapper>
);

export default Sidebar;
