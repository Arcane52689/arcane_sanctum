import React from 'react'
import PropTypes from 'prop-types'
import {Button} from 'react-bootstrap'

class SubmitButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  className() {
    let baseClass = 'btn ';
    if (this.props.className) {
      baseClass += this.props.className;
    }
    return baseClass;
  }

  render() {
    return (
      <Button
        bsClass={this.className()}
        disabled={this.props.isSubmitting}
      >
        {this.props.children}
      </Button>
    )
  }
}

SubmitButton.defaultProps = {
  isSubmitting: false,
  chidlren: 'Submit',
  onClick: function() { console.log('Clicked') },
  className: 'btn-primary',

}

SubmitButton.propTypes = {
  isSubmitting: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string
}


export default SubmitButton;