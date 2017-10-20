import React from 'react'
import Cell from './Cell'
import {connect} from 'react-redux'
import {clickCell} from '../actions/cells'

// This might need to be turned into a stateful component (aka container)
const Board = (props) => {
  console.log(props)

  function handleClick (cell) {
    props.dispatch(clickCell(cell))
  }
  return (
    <div className='boardcontainer'>
      {props.cells.map(cell => <Cell handleClick={handleClick} details={cell} />)}
    </div>
  )
}

function mapStateToProps (state) {
  return {
    cells: state.cells
  }
}

export default connect(mapStateToProps)(Board)
