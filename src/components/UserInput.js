import React, {Component} from 'react';
import { connect } from 'react-redux';
import { setUserName, clearUserName } from '../actions/actions';
import greetings from '../resources/greetings';

class UserInput extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     name: '',
  //     greeting: ''
  //   };
  //   this.updateName = this.updateName.bind(this);
  //   this.clearName = this.clearName.bind(this);
  //   this.setGreeting = this.setGreeting.bind(this);
  //   this.updateGreeting = this.updateGreeting.bind(this);
  // }

  // updateName = () => {
  //   this.setState({
  //     name: document.getElementById("user-input__name").value
  //   });
  // }

  // clearName = () => {
  //   document.getElementById("user-input__name").value = '';
  //   this.props.setName();
  // }
  //
  // setGreeting = () => {
  //   this.setState({
  //     greeting: greetings[Math.floor(Math.random() * greetings.length)]
  //   });
  // }
  //
  // updateGreeting = () => {
  //   this.updateName();
  //   this.setGreeting();
  // }

  // render() {
  //   return (<div>
  //     <div>
  //       <div>What is your name?</div>
  //       <input id="user-input__name" type="text" placeholder="your name" />
  //     </div>
  //     <button onClick={this.updateGreeting}>Submit</button>
  //     <button onClick={this.clearName}>Clear</button>
  //     {this.state.name ?
  //       <div>{this.state.greeting}, {this.state.name}!</div>
  //     : null}
  //   </div>);
  // }

  render() {
    return (<div>
      <div>
        <div>What is your name?</div>
        <input id="user-input-name" className="user-input__name" type="text" placeholder="your name" />
      </div>
      <button onClick={() => this.props.setName(document.getElementById("user-input-name").value)}>
        Submit
      </button>
      <button onClick={() => this.props.clearName("user-input-name")}>
        Clear
      </button>
      {this.props.name ?
        <div>{this.props.name}!</div>
      : null}
    </div>);
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.name
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => dispatch(setUserName(name)),
    clearName: (elemId) => dispatch(clearUserName(elemId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInput);
