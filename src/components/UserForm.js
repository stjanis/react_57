import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as userActions from '../actions/userActions';
import greetings from '../resources/greetings';

import '../assets/styles/partials/_user-form.scss'; 

const UserForm = (props) => {
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  const clear = (elemId) => {
    props.clearName();
    document.getElementById(elemId).value = '';
  };
  
  return (
    <div className="user-form">
      <div>
        <h1 className="user-form__title">What is your name?</h1>
        <input id="user-form-name" className="user-form__name" type="text" placeholder="your name" />
      </div>
      <button 
        className="user-form__button user-form__button--submit"
        onClick={() => props.setName(document.getElementById("user-form-name").value)}
      >
        Submit
      </button>
      <button 
        className="user-form__button user-form__button--clear"
        onClick={() => clear("user-form-name")}
      >
        Clear
      </button>
      {props.name ?
        <div className="user-form__greeting">
          <h2 className="user-form__subtitle">
            {greeting}, {props.name}!
          </h2>
          <p className="user-form__slogan">
            Let's build react apps!
          </p>
        </div>
      : null}
    </div>
  );
};

UserForm.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
