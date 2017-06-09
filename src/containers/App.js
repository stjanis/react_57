import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as userActions from '../actions/userActions';
import UserForm from '../components/UserForm';

class App extends Component {

  getAllProps() {
    return {
      quote: this.props.quote,
      clearQuote: this.props.clearQuote,
      setQuote: this.props.setQuote
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
  setQuote: PropTypes.func,
  clearQuote: PropTypes.func,
  quote: PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    quote: state.quote
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setQuote: (quote) => dispatch(userActions.setQuote(quote)),
    clearQuote: () => dispatch(userActions.clearQuote())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);