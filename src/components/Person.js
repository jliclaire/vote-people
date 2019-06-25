import React, { Component } from "react";
import VoteButton from "./VoteButton";
import "./Person.css";

class Person extends Component {
  addNewVote = () => {
    this.props.totalVotes();
  };

  render() {
    return (
      <div className="Person">
        <p>
          {this.props.value.firstName} {this.props.value.lastName} from{" "}
          {this.props.value.city}
        </p>
        <VoteButton updateVotes={this.addNewVote} />
      </div>
    );
  }
}

export default Person;
