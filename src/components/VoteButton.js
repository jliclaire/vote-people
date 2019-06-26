import React, { Component } from "react";

class VoteButton extends Component {
  state = {
    numberOfVotes: 0
  };

  handleClick = () => {
    // const currentVotes = this.props.votes;
    // this.setState({ numberOfVotes: currentVotes + 1 });

    this.props.updateVotes();
    this.props.updateIndividualVotes();
  };

  render() {
    return <button onClick={this.handleClick}>Click</button>;
  }
}

export default VoteButton;
