// Importando o React
import React, { Component } from 'react';
// Importando os components necessários da lib react-materialize
import { Row, Col, Card, Input, Button } from 'react-materialize';
// Importando o componenet UserProfile
import UserProfile from '../user_profile/user_profile'
// Importando o componenet Feedback
import Feedback from '../feedback/feedback'
import PropTypes from 'prop-types';

const Contact = () => (
  <Row>
    <Col m={3} s={12}>
      <UserProfile />
    </Col>
    <Col m={8} s={12}>
        <h5>Contact</h5>
        <Card>
          <Row>
              <Input placeholder="Say My Name! Ops.. your name." label="Name" s={12} />
              <Input placeholder="Subject Mother F%#!*$." label="Subject" s={12} />
              <Input placeholder="What are would to say?" label="Message" s={12} />
            <Col s={12} m={12}>
            <button class="btn waves-effect waves-light green right" type="submit" name="action">Submit
            <i class="material-icons right">send</i>
            </button>
            </Col>
          </Row>
        </Card>
    </Col>
  </Row>
);

export default Contact;

// export default class FeedbackForm extends Component {
//   state = {
//     feedback: '',
//     formSubmitted: false
//   };

//   handleCancel = this.handleCancel.bind(this);
//   handleChange = this.handleChange.bind(this);
//   handleSubmit = this.handleSubmit.bind(this);

//   static sender = 'sender@example.com';

//   handleCancel() {
//     this.setState({
//       feedback: ''
//     });
//   }

//   handleChange(event) {
//     this.setState({
//       feedback: event.target.value
//     });
//   }

//   handleSubmit(event) {
//     event.preventDefault();

//     const {
//       REACT_APP_EMAILJS_RECEIVER: receiverEmail,
//       REACT_APP_EMAILJS_TEMPLATEID: template
//     } = this.props.env;

//     this.sendFeedback(
//       template,
//       this.sender,
//       receiverEmail,
//       this.state.feedback
//     );

//     this.setState({
//       formSubmitted: true
//     });
//   }

//   sendFeedback(templateId, senderEmail, receiverEmail, feedback) {
//     window.emailjs
//       .send('mailgun', templateId, {
//         senderEmail,
//         receiverEmail,
//         feedback
//       })
//       .then(res => {
//         this.setState({
//           formEmailSent: true
//         });
//       })
//       // Handle errors here however you like
//       .catch(err => console.error('Failed to send feedback. Error: ', err));
//   }

//   render() {
//     return (
//       <form className="feedback-form" onSubmit={this.handleSubmit}>
//         <h1>Your Feedback</h1>
//         <textarea
//           className="text-input"
//           id="feedback-entry"
//           name="feedback-entry"
//           onChange={this.handleChange}
//           placeholder="Enter your feedback here"
//           required
//           value={this.state.feedback}
//         />
//         <div className="btn-group">
//           <button className="btn btn--cancel" onClick={this.handleCancel}>
//             Cancel
//           </button>
//           <input type="submit" value="Submit" className="btn btn--submit" />
//         </div>
//       </form>
//     );
//   }
// }

// FeedbackForm.propTypes = {
//   env: PropTypes.object.isRequired
// };