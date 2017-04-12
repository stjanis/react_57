import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as userActions from '../actions/userActions';
import UserForm from '../components/UserForm';

// 01: say hello
// 1. prompt for user name
// 2. say hello to user
// 3. add random greetings
// 4. test it

class App extends Component {

  getAllProps() {
    return {
      string: this.props.string,
      clearString: this.props.clearString,
      setString: this.props.setString
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
  setString: PropTypes.func,
  clearString: PropTypes.func,
  string: PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    string: state.string
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setString: (string) => dispatch(userActions.setString(string)),
    clearString: () => dispatch(userActions.clearString())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);