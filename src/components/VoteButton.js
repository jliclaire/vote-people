import React, { Component } from "react";

class VoteButton extends Component {
  state = {
    numberOfVotes: 0
  };

  handleClick = () => {
    const currentVotes = this.state.numberOfVotes;
    this.setState({ numberOfVotes: currentVotes + 1 });

    this.props.updateVotes();
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        Voted {this.state.numberOfVotes} times
      </button>
    );
  }
}

export default VoteButton;
