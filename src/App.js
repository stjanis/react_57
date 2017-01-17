import React from 'react';
import UserInput from './components/UserInput';
import UserSubmit from './components/UserSubmit';

const App = () =>
  <div>
    <UserInput />
    <UserSubmit />
  </div>;

export default App;

// 1. prompt for user name
// 2. say hello to user
// 3. add random greetings

// create name input
// create submit button
// create container / parent component for input field and submit button
// update state object (store) with user name on submit (dispatch action)
// return user name + random greeting text from store
// import parent component in App.js
// add style and layout rules
