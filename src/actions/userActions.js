export function getQuote(quote) {
  return {
    type: 'GET_QUOTE',
    quote
  };
}

export function setQuote(userQuote) {
  return (dispatch) => {
    dispatch(getQuote(userQuote));      
  };
}

export function clearQuote() {
  return (dispatch) => {
    dispatch(setQuote(''));
  };
}

// export function getAuthor(name) {
//   return {
//     type: 'GET_AUTHOR',
//     name
//   };
// }

// export function setAuthor(authorName) {
//   return (dispatch) => {
//     dispatch(getAuthor(authorName));      
//   };
// }

// export function clearAuthor() {
//   return (dispatch) => {
//     dispatch(setAuthor(''));
//   };
// }