import React, { Component } from 'react';
import './App.css';
import CharacterList from './components/CharacterList'

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

// 1. Make sure to know how to render Character names. 
// 2. Make single character component and a character list component
// 3. Make sure to render both components inside App.js
// 4. Style the character component.
  
render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className="allChar">

        <CharacterList characterList={this.state.starwarsChars}  />
          {/* {
            this.state.starwarsChars.map(char => (
              char.name
            ))
          } */}
        </div>
      </div>
    );
  }
}

export default App;
