// Importando o React
import React from "react";
// Importando o componenet UserProfile
import UserProfile from '../user_profile/user_profile'
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';

const Not_Found = () => (
  <Row>
    <Col m={3} s={12}>
      <UserProfile />
    </Col>
    <Col m={8} s={12}>
        <Card>
        <Row>
    <Col m={8} s={20}>
        <h3 class="orange-text text-lighten-1">Error <strong>404</strong> - Page Not Found!</h3>
         <h5>
          <p>Hi Bro!</p>
          <p>This page don´t exists :´(</p>
          <p>Please step back <a href='./'>here! </a> :D</p>
         </h5>
    </Col>
        </Row>
        </Card>
    </Col>
  </Row>
);


export default Not_Found;