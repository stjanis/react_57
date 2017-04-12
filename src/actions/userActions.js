export function getString(string) {
  return {
    type: 'GET_STRING',
    string
  };
}

export function setString(userString) {
  return (dispatch) => {
    dispatch(getString(userString));
  };
}

export function clearString() {
  return (dispatch) => {
    dispatch(setString(''));
  };
}