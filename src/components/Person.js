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
    this.props.totalIndividualVotes(this.props.value);
  };

  render() {
    return (
      <div className="Person">
        <p>
          {this.props.value.firstName} {this.props.value.lastName} from{" "}
          {this.props.value.city}
        </p>{" "}
        <p>Votes count: {this.props.value.votes}</p>
        <VoteButton
          updateVotes={this.addNewVote}
          updateIndividualVotes={this.addIndividualVotes}
        />
      </div>
    );
  }
}

export default Person;
