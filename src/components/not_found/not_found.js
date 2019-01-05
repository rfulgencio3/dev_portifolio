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
        <h5>Not found!</h5>
        <Card>
        <Row>
    <Col m={8} s={20}>
        <h5>Beeeeeep!</h5>
         <h3>
          <p>Hi Bro!</p>
          <p>This page don´t exists :´(</p>
          <p>Please step back! :D</p>
         </h3>
    </Col>
        </Row>
        </Card>
    </Col>
  </Row>
);


export default Not_Found;