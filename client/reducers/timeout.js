export default function (state = false, action) {
  switch(action.type) {
    case 'TIMEOUT':
      return true
    case 'NOT_SOLVED':
      return false
    default:
      return state
  }
}
