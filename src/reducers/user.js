export function string(state = '', action) {
  switch (action.type) {
    case 'GET_STRING':
      return action.string;
    default:
      return state;
  }
}
