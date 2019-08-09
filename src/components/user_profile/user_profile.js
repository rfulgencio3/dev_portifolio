// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';
// importando a foto do usuário (note que depois podemos usa-la facilmente chamando apenas avatar ao invés do caminho completo)
import avatar from '../../images/avatar.png';

const UserProfile = () => (
  <Card>
      <Row>
        <Col s={8} m={8} offset="s2 m2">
<<<<<<< HEAD
          <img src={avatar} className="circle responsive-img" alt="circle avatar profile"/>
=======
          <img src={avatar} className="circle responsive-img" alt="Responsive circle"/>
>>>>>>> 381993a0870f95a660ad8934912c862b9ba4ca66
        </Col>
      </Row>
      <Row className="center-align">
        <h5 >Ricardo Fulgencio</h5>
        <p className="green darken-1 white-text">Developer</p>
      </Row>
  </Card>
);

export default UserProfile;