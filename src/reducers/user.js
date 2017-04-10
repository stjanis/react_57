export function name(state = '', action) {
  switch (action.type) {
    case 'GET_USER_NAME':
      return action.name;
    default:
      return state;
  }
}
