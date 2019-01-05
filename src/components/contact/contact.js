// Importando o React
import React, { Component } from 'react';
// Importando os component necessários da lib react-materialize
import { Row, Col, Card, Input, Button } from 'react-materialize';
// Importando o component UserProfile
import UserProfile from '../user_profile/user_profile'
// Importando o component EmailJs
import * as emailjs from 'emailjs-com';
import { toast } from 'react-toastify';


class Contact extends Component {

    componentWillMount() {
        emailjs.init('user_xj2bAzEaj0YoSEsknhevv');
    }

    submit = () => {
        // Change all values to your own
        let params = {
            user_id: 'user_xj2bAzEaj0YoSEsknhevv',
            access_token: 'f5c0fe6534143fa5729b81a1b101e1ec',
            service_id: 'devteam_mailgun',
            template_id: 'template_oOOrmheb_clone',
            template_params: {
                'from_name': document.getElementById("name").value,
                'subject_msg': document.getElementById("subject").value,
                'message_html': document.getElementById("message").value
            }
        };

        let headers = {
            "Content-type": "application/json"
        };

        let options = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(params)
        };

        fetch('https://api.emailjs.com/api/v1.0/email/send', options)
            .then((httpResponse) => {
                if (httpResponse.ok) {
                    toast.success('Message send!');
                } else {
                    return httpResponse.text()
                        .then(text => Promise.reject(text));
                }
            })
            .catch((error) => {
                toast.error('Oops... ' + error);
            });
    }

    clearForm = () => {
        document.getElementById("name").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
    }

    render() {
        return(
            <Row>
                <Col m={3} s={12}>
                    <UserProfile />
                </Col>
                <Col m={8} s={12}>
                    <h5>Contact</h5>
                    <Card>
                        <Row id="RowList">
                            <Input placeholder="Say My Name! Ops.. your name." label="Name" s={12} id="name" ref="txtName" />
                            <Input placeholder="Subject Mother F%#!*$." label="Subject" s={12} id="subject" ref="txtSubject" />
                            <Input placeholder="What would you like to say?" label="Message" s={12} id="message" ref="txMessage" />
                            <Col s={12} m={12}>
                                <button class="btn waves-effect waves-light green right" type="submit" name="action" id="btnEnviar" onClick={this.submit}>Submit
                        <i class="material-icons right">send</i>
                                </button>
                                <button class="btn waves-effect waves-light blue lighten-2 center" type="submit" name="cancel" id="btLimpar" onClick={this.clearForm}>Clear
                        <i class="material-icons right">clear_all</i>
                                </button>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        )
    }
}

// emailjs.send('devteam_mailgun', 'template_oOOrmheb_clone', templateParams)
//   .then(function(response) {
//      console.log('SUCCESS!', response.status, response.text);
//   }, function(error) {
//      console.log('FAILED...', error);
//   });

export default Contact;