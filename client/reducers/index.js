import { combineReducers } from 'redux'

// import otherReducer from './other-reducer'
import cells from './cells'
import temp from './temp'
import solved from './solved'
import timeout from './timeout'
// import temp from './reducers/temp'
// import solved from './reducers/solved'

export default combineReducers({
  cells,
  temp,
  solved,
  timeout
})
