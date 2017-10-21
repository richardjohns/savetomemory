import React from 'react'

// Once you've created a container with mapState or mapDispatch to props, can export them directly into props
export default function Cell ({cell, click, temp, solved, timeout}) {
  console.log({cell, click})
  const sand = "/images/back.jpg";
  const onclick = () => click(cell)
  const image = cell.img
  return (
  <div className='cell' onClick={onclick}>

    <img src={image}/>

  </div>

)
}

// container
