import React, { Component, PropTypes } from 'react';

// @todo test this
const UserFormHOC = (C) => {
  class UserFormComp extends Component {
    constructor() {
      super();
      this.clear = this.clear.bind(this);
      this.handleKeyDown = this.handleKeyDown.bind(this);
    }

  clear(elemId) {
    this.props.clearQuote();
    document.getElementById(elemId).value = '';
  }

  handleKeyDown(e, quote) {
    if (e.keyCode === 13) {
      this.props.setQuote(quote);
    }
  }

    render() {
      return (
        <C
          quote={this.props.quote}
          clearQuote={this.clear}
          setQuote={this.props.setQuote}
          handleKeyDown={this.handleKeyDown}
        />
      );
    }
  }

  UserFormComp.propTypes = {
    quote: PropTypes.string,
    clearQuote: PropTypes.func,
    setQuote: PropTypes.func,
    handleKeyDown: PropTypes.func,
  };

  return UserFormComp;
};

export default UserFormHOC;