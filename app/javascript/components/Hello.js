import React from "react"
import PropTypes from "prop-types"
class Hello extends React.Component {
  render () {
    return (
      // <React.Fragment>
      // </React.Fragment>
      <h1>Hello {this.props.name}!</h1>
    );
  }
}

export default Hello
