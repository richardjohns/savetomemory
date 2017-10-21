import React from 'react'
import { connect } from "react-redux";
import { clickCell } from "../actions/cells";

// Once you've created a container with mapState or mapDispatch to props, can export them directly into props
const Cell = ({cell, click, temp, solved, timeout}) => {
  console.log({cell, click})
  const sand = "/images/back.jpg"
  const onclick = () => click(cell)
  const image = cell.img
  return (
  <div className='cell' onClick={onclick}>

    <img src={image}/>

  </div>

  )
}

// container

const mapStateToProps = ({ temp, solved, timeout }) => {
  return {
    temp,
    solved,
    timeout
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    click: cell => dispatch(clickCell(cell))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cell)
