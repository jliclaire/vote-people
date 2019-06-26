import React, { Component } from "react";

class VoteButton extends Component {
  handleClick = () => {
    this.props.updateVotes();
    this.props.updateIndividualVotes();
  };

  render() {
    return <button onClick={this.handleClick}>Click</button>;
  }
}

export default VoteButton;
