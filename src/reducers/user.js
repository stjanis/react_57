export function quote(state = '', action) {
  switch (action.type) {
    case 'GET_QUOTE':
      return action.quote;
    default:
      return state;
  }
}
