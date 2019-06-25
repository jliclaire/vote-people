import React, { Component } from "react";

class Button extends Component {
  handleClick = () => {
    this.props.sortClick(this.props.item);
  };

  render() {
    return <button onClick={this.handleClick}>{this.props.children}</button>;
  }
}

export default Button;
