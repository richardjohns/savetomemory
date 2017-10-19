import React from 'react'

import Cell from './Cell'

// This might need to be turned into a stateful component (aka container)
const Board = () => (
  <div className='boardcontainer'>

    <div className="cell"><Cell /></div>
    <div className="cell"><Cell /></div>
    <div className="cell"><Cell /></div>
    <div className="cell"><Cell /></div>

    <div className="cell"><Cell /></div>
    <div className="cell"><Cell /></div>
    <div className="cell"><Cell /></div>
    <div className="cell"><Cell /></div>

    <div className="cell"><Cell /></div>
    <div className="cell"><Cell /></div>
    <div className="cell"><Cell /></div>
    <div className="cell"><Cell /></div>

    <div className="cell"><Cell /></div>
    <div className="cell"><Cell /></div>
    <div className="cell"><Cell /></div>
    <div className="cell"><Cell /></div>




  </div>
)

export default Board