export function getUserName(name) {
  return {
    type: 'GET_USER_NAME',
    name
  };
}

export function setUserName(userName) {
  return (dispatch) => {
    dispatch(getUserName(userName));      
  };
}

export function clearUserName() {
  return (dispatch) => {
    dispatch(setUserName(''));
  };
}