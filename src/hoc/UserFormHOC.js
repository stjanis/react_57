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
    this.props.clearName();
    document.getElementById(elemId).value = '';
  }

  handleKeyDown(e, name) {
    if (e.keyCode === 13) {
      this.props.setName(name);
    }
  }

    render() {
      return (
        <C
          name={this.props.name}
          clearName={this.clear}
          setName={this.props.setName}
          handleKeyDown={this.handleKeyDown}
        />
      );
    }
  }

  UserFormComp.propTypes = {
    name: PropTypes.string,
    clearName: PropTypes.func,
    setName: PropTypes.func,
    handleKeyDown: PropTypes.func,
  };

  return UserFormComp;
};

export default UserFormHOC;