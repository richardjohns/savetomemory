import React from 'react'

// This might need to be turned into a stateful component (aka container)
const Cell = (props) => {
  const sand = '/images/back.jpg'
  const image = props.details.isTemp ? props.details.img : sand
  return (
    <div className='cell'onClick={() => props.handleClick(props.details)}>

      {/* <img src={props.details.img}/> */}
      <img src={image} />

    </div>

  )
}

export default Cell
