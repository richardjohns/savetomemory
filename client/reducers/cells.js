export default function clickedCells (state = [], action) {
  switch (action.type){
    case 'CLICK_CELL':
    return [...state, action.cell]
  }
}
