import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'
import person from './Person/Person';

class App extends Component {
    state = {
        person: [
            {name: 'Sahil', age:22},
            {name: 'Bittu', age:20},
            {name: 'Mukesh', age:21}
        ]
    }

    clk = () =>{
        console.log("clicked");
    }
    render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
            <button onClick={this.clk()}>Click Me</button>
          {/* <Person  name={this.state.person[0].name} age={this.state.person[0].age}/> */}
          <Person  name={this.state.person[1].name} age={this.state.person[1].age}>My hobbies: watching movie</Person>
          {/* <Person  name={this.state.person[2].name} age={this.state.person[2].age}/> */}
        </p>
      </div>
    );
  }
}

export default App;
