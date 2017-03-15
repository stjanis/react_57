export function getUserName(name) {
    return {
        type: 'GET_USER_NAME',
        name
    };
}
export function getUserGreeting(greeting) {
    return {
        type: 'GET_USER_GREETING',
        greeting
    };
}
export function setUserName(userName) {
  return (dispatch) => {
    dispatch(getUserName(userName));
  }
}
