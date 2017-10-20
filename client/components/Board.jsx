import React from 'react'
import Cell from './Cell'
import {connect} from 'react-redux'
import {clickCell} from '../actions/cells'

// This might need to be turned into a stateful component (aka container)
const Board = (props) => {
  console.log(props)

  function handleClick (cells) {
    if (cell.isSolved) {
      return
    } else if (cell.isTemp) {
      return
    } else if (cell.img === cell.img) {
      props.dispatch(setToSolve(cell1, cell2))
    } else{
      props.dispatch(flipBack(cell1, cell2))
    }
    props.dispatch(clickCell(cell))
  }
  return (
    <div className='boardcontainer'>
      {props.cells.map(cell => <Cell handleClick={handleClick} cells={props.cells} details={cell} />)}
    </div>
  )
}

function mapStateToProps (state) {
  return {
    cells: state.cells
  }
}

export default connect(mapStateToProps)(Board)
