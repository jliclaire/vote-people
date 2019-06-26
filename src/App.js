import React, { Component } from "react";
import "./App.css";
import Person from "./components/Person";
import Button from "./components/Button";

class App extends Component {
  state = {
    people: [
      {
        firstName: "Sara",
        lastName: "Hegdal",
        city: "Hawaii",
        votes: 0
      },
      {
        firstName: "Cahal",
        lastName: "Louis",
        city: "Jakarta",
        votes: 0
      },
      {
        firstName: "Edite",
        lastName: "Williams",
        city: "Perth",
        votes: 0
      },
      {
        firstName: "Billy",
        lastName: "Wong",
        city: "Hong Kong",
        votes: 0
      }
    ],
    voteCounts: 0
  };

  countTotalVotes = () => {
    const currentVoteCounts = this.state.voteCounts;
    this.setState({ voteCounts: currentVoteCounts + 1 });
  };

  countIndividualVotes = person => {
    let foundPerson = this.state.people.filter(item => item === person);
    foundPerson[0].votes++;
  };

  handleSortByCityClick = array => {
    const sortedArray = array.sort((a, b) => {
      if (a.city < b.city) {
        return -1;
      }
      if (a.city > b.city) {
        return 1;
      }
      // names must be equal
      return 0;
    });
    this.setState({ people: sortedArray });
  };

  handleSortByFirstNameClick = array => {
    console.log("origin array below");
    console.log(array);
    const sortedArray = array.sort((a, b) => {
      if (a.firstName < b.firstName) {
        return -1;
      }
      if (a.firstName > b.firstName) {
        return 1;
      }
      // names must be equal
      return 0;
    });
    console.log("sorted array");
    console.log(sortedArray);
    this.setState({ people: sortedArray });
  };

  handleSortByLastNameClick = array => {
    const sortedArray = array.sort((a, b) => {
      if (a.lastName < b.lastName) {
        return -1;
      }
      if (a.lastName > b.lastName) {
        return 1;
      }
      // names must be equal
      return 0;
    });
    this.setState({ people: sortedArray });
  };

  render() {
    return (
      <div className="App">
        <div className="sort-button-group">
          <Button
            sortClick={this.handleSortByCityClick}
            item={this.state.people}
          >
            Sort by city
          </Button>
          <Button
            sortClick={this.handleSortByFirstNameClick}
            item={this.state.people}
          >
            Sort by first name
          </Button>
          <Button
            sortClick={this.handleSortByLastNameClick}
            item={this.state.people}
          >
            Sort by last name
          </Button>
        </div>
        <div className="card-group">
          {this.state.people.map((element, index) => (
            <Person
              key={index}
              value={element}
              totalVotes={this.countTotalVotes}
              totalIndividualVotes={this.countIndividualVotes}
            />
          ))}
        </div>
        <h3>Total {this.state.voteCounts} votes</h3>
      </div>
    );
  }
}

export default App;
