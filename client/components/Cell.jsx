import React from 'react'

// This might need to be turned into a stateful component (aka container)
const Cell = (props) => {
  return (
  <div className='cell'>

    <img src={props.details.img}/>

    </div>

)
}

export default Cell
