import {connect} from 'react-redux'
import {clickCell} from '../actions/cells'

import Cell from '../components/Cell'

const mapStateToProps = ({temp, solved, timeout}) => {
  return {
    temp,
    solved,
    timeout
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    click: (cell) => dispatch(clickCell(cell))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cell)
