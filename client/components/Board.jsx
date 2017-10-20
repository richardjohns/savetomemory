import React from 'react'
import Cell from '../containers/Cell'
import {connect} from 'react-redux'
import {clickCell, solved, notSolved, timeout} from '../actions/cells'

// This might need to be turned into a stateful component (aka container)
class Board extends React.Component {
  componentWillReceiveProps({temp, dispatch}) {
    if (temp.length == 2) {
      console.log("length is two")
      if (temp[0].img == temp[1].img) {
        dispatch(solved([...temp]))
      }
      else {
        dispatch(timeout())
        setTimeout(() => dispatch(notSolved()), 3000)
      }
    }
  }
  render() {
    const {cells, timeout} = this.props
    return (
      <div>
        {timeout ? <h1>Woah, nice fuck up</h1> : <h1>Save it to Memory!</h1>}
        <div className='boardcontainer'>
          {cells.map((cell, i) => <Cell key={i} cell={cell} />)}
        </div>
      </div>
    )
  }
}

function mapStateToProps ({cells, temp, timeout}) {
  return {
    cells,
    temp,
    timeout
  }
}

export default connect(mapStateToProps)(Board)
