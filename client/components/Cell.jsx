import React from 'react'

// This might need to be turned into a stateful component (aka container)
export default function Cell ({cell, click, temp, solved, timeout}) {
  const sand = '/images/back.jpg'
  const image = (temp.find(tc => tc == cell) || solved.find(sc => sc == cell)) ? cell.img : sand
  const onclick = timeout ? () => console.log("nah mate") : () => click(cell)
  return (
    <div style={{cursor: timeout ? 'wait' : 'pointer'}} className='cell' onClick={onclick}>

      {/* <img src={props.details.img}/> */}
      <img src={image} />

    </div>

  )
}


//container
