// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Navbar, NavItem, Row} from 'react-materialize';
<<<<<<< HEAD
=======
// Importando o Component NavLink da nossa lib de rotas
// import { NavLink } from 'react-router-dom'

>>>>>>> 381993a0870f95a660ad8934912c862b9ba4ca66

const Header = () => (
  <Row>  
    <Navbar className="green">
      <NavItem href='/'>Home</NavItem>
      <NavItem href='/contact'>Contact</NavItem>
    </Navbar>
  </Row>
);

export default Header;