import React from 'react'
import Cell from './Cell'
import {connect} from 'react-redux'
import {clickCell} from '../actions/cells'

// This might need to be turned into a stateful component (aka container)
class Board extends React.Component {

  // componentWillReceiveProps() {
  // }

  render() {
    const {cells} = this.props
    return (
      <div className='boardcontainer'>
        {cells.map((cell, i) => <Cell key={i} cell={cell} />)}
      </div>
    )
  }
}
  
function mapStateToProps ({cells}) {
  return {
    cells
  }
} 

export default connect(mapStateToProps)(Board)
