import React from 'react'

import Cell from './Cell'

// This might need to be turned into a stateful component (aka container)
const Board = () => {
return(
  <div className='boardcontainer'>
    {props.cells.map(cell => <Cell details={cell} />)}
  </div>
)

function mapStateToProps (state) {
  return {
    cells: state.cells
  }
}

export default connect(mapStateToProps)(Board)
