// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';

// Recebe os parâmetros passadados para o Component na variável props
const Experience = (props) => (
    <Card>
        <Row>
            <Col s={2} m={2}>
                <img src={props.avatar} className="circle responsive-img" alt="circle avatar profile"/>
                { props.name }
            </Col>
            <Col s={10} m={10}>
                <p><b>{props.title} in <span className="grey darken-5 white-text">{props.company}</span></b></p>
                <p>{props.description}</p>
            </Col>
        </Row>
    </Card>
);

export default Experience;