import React, { PropTypes } from 'react';
import UserFormHOC from '../hoc/UserFormHOC';
import greetings from '../resources/greetings';

import '../assets/styles/partials/_user-form.scss'; 

const UserForm = (props) => {
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];
  
  return (
    <div className="user-form">
      <div>
        <h1 className="user-form__title">What is your name?</h1>
        <input 
          id="user-form-name"
          className="user-form__name"
          type="text"
          placeholder="your name"
          onKeyDown={(e) => props.handleKeyDown(e, document.getElementById("user-form-name").value)}
        />
      </div>
      <button 
        className="user-form__button user-form__button--submit"
        onClick={() => props.setName(document.getElementById("user-form-name").value)}
      >
        Submit
      </button>
      <button 
        className="user-form__button user-form__button--clear"
        onClick={() => props.clear("user-form-name")}
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
  clear: PropTypes.func,
  handleKeyDown: PropTypes.func,
};

export default UserFormHOC(UserForm);
