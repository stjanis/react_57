import React, { PropTypes } from 'react';
import UserFormHOC from '../hoc/UserFormHOC';

const UserForm = (props) => {
  console.log(props);
  return (
    <div className="user-form">
      <div className="user-form__field">
        <h1 className="user-form__title">...</h1>
        <input 
          id="user-form-quote"
          className="user-form__input user-form__input--quote"
          type="text"
          placeholder="enter quote"
          onKeyDown={(e) => props.handleKeyDown(e, document.getElementById("user-form-quote").value)}
        />
      </div>
      <div className="user-form__field user-form__field--author">
        <h1 className="user-form__title">...</h1>
        <input 
          id="user-form-author"
          className="user-form__input user-form__input--author"
          type="text"
          placeholder="author"
          onKeyDown={(e) => props.handleKeyDown(e, document.getElementById("user-form-author").value)}
        />
      </div>
      <button 
        className="user-form__button user-form__button--submit"
        onClick={() => props.setQuote(document.getElementById("user-form-quote").value)}
      >
        Submit
      </button>
      <button 
        className="user-form__button user-form__button--clear"
        onClick={() => props.clearQuote("user-form-name")}
      >
        Clear
      </button>
      {props.quote ?
        <div className="user-form__quote-wrap">
          <p className="user-form__full-quote">
            {props.quote}
          </p>
          <p>
            {props.author}
          </p>
        </div>
      : null}
    </div>
  );
};

UserForm.propTypes = {
  setQuote: PropTypes.func,
  quote: PropTypes.string,
  clearQuote: PropTypes.func,
  handleKeyDown: PropTypes.func,
};

export default UserFormHOC(UserForm);
