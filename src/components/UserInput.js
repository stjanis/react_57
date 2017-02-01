import React, {Component} from 'react';

class UserInput extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      greeting: ''
    }
    this.updateName = this.updateName.bind(this);
    this.clearName = this.clearName.bind(this);
    this.setGreeting = this.setGreeting.bind(this);
    this.updateGreeting = this.updateGreeting.bind(this);
  }

  updateName = () => {
    this.setState({
      name: document.getElementById("user-input__name").value
    });
  }

  clearName = () => {
    document.getElementById("user-input__name").value = '';
    this.setState({
      name: ''
    });
  }

  setGreeting = () => {
    const greetings = ['hello', 'hej', 'sveiki', 'hola'];
    this.setState({
      greeting: greetings[Math.floor(Math.random() * greetings.length)]
    });
  }

  updateGreeting = () => {
    this.updateName();
    this.setGreeting();
  }

  render() {
    return (<div>
      <div>
        <div>What is your name?</div>
        <input id="user-input__name" type="text" placeholder="your name" />
      </div>
      <button onClick={this.updateGreeting}>Submit</button>
      <button onClick={this.clearName}>Clear</button>
      {this.state.name ?
        <div>{this.state.greeting}, {this.state.name}!</div>
      : null}
    </div>);
  }
}

export default UserInput;
