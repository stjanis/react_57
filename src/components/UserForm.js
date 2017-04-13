import React, { PropTypes } from 'react';
import UserFormHOC from '../hoc/UserFormHOC';

import '../assets/styles/partials/_user-form.scss'; 

const UserForm = (props) => {
  return (
    <div className="user-form">
      <div>
        <h1 className="user-form__title">Check the string length.</h1>
        <input 
          id="user-form-string"
          className="user-form__string"
          type="text"
          placeholder="input text string"
          onChange={() => props.setString(document.getElementById("user-form-string").value)}
          onKeyDown={(e) => props.handleKeyDown(e, document.getElementById("user-form-string").value)}
        />
      </div>
      <button 
        className="user-form__button user-form__button--submit"
        onClick={() => props.setString(document.getElementById("user-form-string").value)}
      >
        Submit
      </button>
      <button 
        className="user-form__button user-form__button--clear"
        onClick={() => props.clearString("user-form-string")}
      >
        Clear
      </button>
      {props.string ?
        <div className="user-form__result">
          <h2 className="user-form__subtitle">
            {props.string.length < 80 ?
              `${props.string} is ${props.string.length} characters long!` :
              'string is too long'
            }
          </h2>
        </div>
      : null}
    </div>
  );
};

UserForm.propTypes = {
  setString: PropTypes.func,
  string: PropTypes.string,
  clearString: PropTypes.func,
  handleKeyDown: PropTypes.func,
};

export default UserFormHOC(UserForm);
