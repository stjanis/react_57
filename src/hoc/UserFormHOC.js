import React, { Component, PropTypes } from 'react';

// @todo test this
const UserFormHOC = (C) => {
  class UserFormComp extends Component {
    constructor(props) {
      super(props);
      this.clear = this.clear.bind(this);
      this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    clear(elemId) {
      this.props.clearString();
      document.getElementById(elemId).value = '';
    }

    handleKeyDown(e, string) {
      if (e.keyCode === 13) {
        if(string.length < 80) {
          this.props.setString(string);
        }
      }
    }

    render() {
      return (
        <C
          string={this.props.string}
          clearString={this.clear}
          setString={this.props.setString}
          handleKeyDown={this.handleKeyDown}
        />
      );
    }
  }

  UserFormComp.propTypes = {
    string: PropTypes.string,
    clearString: PropTypes.func,
    setString: PropTypes.func,
    handleKeyDown: PropTypes.func,
  };

  return UserFormComp;
};

export default UserFormHOC;