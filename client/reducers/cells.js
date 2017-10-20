import cellData from '../../data/cells'
// import {CLICK_CELL} from './actions/cells'

const initialState = cellData.cells

function cells (state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}

export default cells
