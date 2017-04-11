import React, { Component, PropTypes } from 'react';
import UserForm from './components/UserForm';
import { connect } from 'react-redux';
import * as userActions from './actions/userActions';

// 01: say hello
// 1. prompt for user name
// 2. say hello to user
// 3. add random greetings
// 4. test it

class App extends Component {

  getAllProps() {
    return {
      name: this.props.name,
      clearName: this.props.clearName,
      setName: this.props.setName
    };
  }

  render() {
    return (
      <div className="root">
        <UserForm {...this.getAllProps()} />
      </div>
    );
  }
}

App.propTypes = {
  setName: PropTypes.func,
  clearName: PropTypes.func,
  name: PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    name: state.name
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => dispatch(userActions.setUserName(name)),
    clearName: () => dispatch(userActions.clearUserName())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);