import PropTypes from 'prop-types'
import {Col, Row, Button, Form} from 'react-bootstrap'
import React from 'react'
import SignUp from './sign_up'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAction: undefined
    };
  }

  toggleAction(action, event) {
    event.preventDefault();
    this.setState({selectedAction: action})
  }

  renderForm() {
    if (this.state.selectedAction === 'sign-up') {
      return (<SignUp/>)
    }

    return null
  }

  render() {
    return (
      <div>
        <h2 className="text-center"> Welcome to the Arcane Sanctum </h2>
        <Row>
          <Col lg={6} className="text-center">
            Login
          </Col>
          <Col className="text-center" lg={6}>
            <Button onClick={this.toggleAction.bind(this, 'sign-up')}>
              Sign Up
            </Button>
          </Col>
        </Row>
        <Row>
          <Col lg={3} md={3}>
          </Col>
          <Col lg={6} md={6}>
            { this.renderForm() }
          </Col>
        </Row>
      </div>
    )
  }
}

export default Home
