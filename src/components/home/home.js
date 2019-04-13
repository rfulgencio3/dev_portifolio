// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';
// Importando o componenet UserProfile
import UserProfile from '../user_profile/user_profile'
// Importando o component Experience
import Experience from '../experience/experience'
// Importando o avatar das empresas
import company_avatar from '../../images/company.png';
import company_avatar2 from '../../images/company2.png';
import company_avatar3 from '../../images/company3.png';
import company_avatar4 from '../../images/company4.png';
import company_avatar5 from '../../images/company5.png';
import company_avatar6 from '../../images/company6.png';


const Home = () => (
  <Row>
    <Col m={3} s={12}>
      <UserProfile />
    </Col>
    <Col m={8} s={12}>
        <h5 className="subtitle">About Me</h5>
        <Card>
          <div>
            <p><b>Personal Information</b></p>
            <p>I'm a tech enthusiast.</p>
            <p>I have experience in application development, I am doing graduate studies in software engineering and postgraduate in relational databases.</p>
            <br/>
            <p><b>Knowledge</b></p>
            <p>I have knowledge in SQL Reaction Databases, Programming in ASP.Net, VB, C # and javascript.</p>
            <p>Experience in work with agile methodologies.</p>
          </div>
        </Card>
        <h5 className="subtitle">Experiences</h5>
   

        {/* Passando os parâmetros title, company, description e avatar para o component Experience */}
        <Experience title="Developer"
                    company="Soundcloud"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborevoluptate velit esse cillum dolore eu fugiat id est laborum."
                    avatar={company_avatar}
        />
        <Experience title="React Developer"
                    company="Twitter"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborevoluptate velit esse cillum dolore eu fugiat id est laborum."
                    avatar={company_avatar2}                    
        />
        <Experience title="Analyst"
                    company="LinkedIn"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborevoluptate velit esse cillum dolore eu fugiat id est laborum."
                    avatar={company_avatar3}
        />
        <Experience title="Dev"
                    company="Zema"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborevoluptate velit esse cillum dolore eu fugiat id est laborum."
                    avatar={company_avatar4}
        />
        <Experience title="System Assistent"
                    company="Uniaraxá"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborevoluptate velit esse cillum dolore eu fugiat id est laborum."
                    avatar={company_avatar6}
        />
    </Col>
  </Row>
);

export default Home;