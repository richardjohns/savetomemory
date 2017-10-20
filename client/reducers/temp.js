export default function (state = [], action) {
  switch(action.type) {
    case 'CLICK_CELL':
      var newState =  [...state.filter(cell => cell != action.cell)]
      return [...state.filter(cell => cell != action.cell), action.cell]
    case 'SOLVED':
      return []
    case 'NOT_SOLVED':
      return []
    default:
      return state
  }
}
