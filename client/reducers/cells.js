import cellData from '../../data/cells'
// import {CLICK_CELL} from './actions/cells'

const initialState = cellData.cells

function cells (state = initialState, action) {
  switch (action.type) {
    case 'CLICK_CELL':
      return flipImg(state, action.cell.id)
    default:
      return state
  }
}

function flipImg (cells, id) {
  return cells.map(item => {
    if (item.id === id) {
      item.isTemp = !item.isTemp
    }
    return item
  })
}

export default cells
