// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Navbar, NavItem, Row} from 'react-materialize';
// Importando o Component NavLink da nossa lib de rotas
import { NavLink } from 'react-router-dom'


const Header = () => (
  <Row>  
    <Navbar className="grey darken-2">
      <NavItem href='/'>Home</NavItem>
      <NavItem href='/contact'>Contact</NavItem>
    </Navbar>
  </Row>
);

export default Header;