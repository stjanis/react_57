export function name(state = '', action) {
  switch (action.type) {
    case 'GET_USER_NAME':
      return action.name;
    default:
      return state;
  }
}

// export function greeting(state = '', action) {
//     switch (action.type) {
//         case 'GET_USER_GREETING':
//             return action.greeting;
//         default:
//             return state;
//     }
// }
