export default function (state = [], action) {
  switch(action.type) {
    case 'SOLVED':
    console.log({action})
      return [...state, action.one, action.two]
    default:
      return state
  }
}
