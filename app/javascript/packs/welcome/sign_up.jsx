import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import SubmitButton from '../static/submit_button'
import {Form, FormGroup, FormControl, ControlLabel, Row, Col} from 'react-bootstrap'

class SignUp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      submitting: false
    }
  }

  submitForm(e) {
    e.preventDefault();
  }

  render() {
    return (
      <Form horizontal>
        <h3 className="text-center">Sign Up!</h3>
        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} lg={2}>
            Email
          </Col>
          <Col lg={10}>
            <FormControl type="email" placeholder="Email" />
          </Col>
        </FormGroup>
        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} lg={2}>
            Username
          </Col>
          <Col lg={10}>
            <FormControl type="text" placeholder="Username" />
          </Col>
        </FormGroup>
        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} lg={2}>
            Password
          </Col>
          <Col lg={10}>
            <FormControl type="password" placeholder="Password" />
          </Col>
        </FormGroup>
        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} lg={2}>
            PasswordConfirmation
          </Col>
          <Col lg={10}>
            <FormControl type="password" placeholder="Password Confirmation" />
          </Col>
        </FormGroup>
        <Row>
          <Col lg={9} md={9}/>
          <Col lg={2}  md={2}>
          <SubmitButton
            isSubmitting={this.state.submitting}
            onClick={this.submitForm}
            className="btn-primary text-center"
          >
            Sign Up
          </SubmitButton>
          </Col>
        </Row>
      </Form>
    )
  }
}

export default SignUp