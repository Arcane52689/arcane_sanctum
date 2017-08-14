import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {Col, Row, Button} from 'react-bootstrap'

class Home extends React.Component {

  render() {
    return (
      <div>
        <h2 className="text-center"> Welcome to the Arcane Sanctum </h2>
        <Row>
          <Col lg={6} className="text-center">
            Login
          </Col>
          <Col className="text-center" lg={6}>
            Sign Up
          </Col>
        </Row>
      </div>
    )
  }
}

export default Home
