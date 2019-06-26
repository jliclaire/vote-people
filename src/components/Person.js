import React, { Component } from "react";
import VoteButton from "./VoteButton";
import "./Person.css";

class Person extends Component {
  state = {
    votes: 0
  };
  addNewVote = () => {
    this.props.totalVotes();
  };

  addIndividualVotes = () => {
    const currentIndividualVotes = this.state.votes;
    this.setState({ votes: currentIndividualVotes + 1 });
  };

  render() {
    return (
      <div className="Person">
        <p>
          {this.props.value.firstName} {this.props.value.lastName} from{" "}
          {this.props.value.city}
        </p>{" "}
        <p>Votes count: {this.state.votes}</p>
        <VoteButton
          updateVotes={this.addNewVote}
          updateIndividualVotes={this.addIndividualVotes}
          votes={this.state.votes}
        />
      </div>
    );
  }
}

export default Person;
