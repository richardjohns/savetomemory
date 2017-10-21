import { connect } from "react-redux";
// brings in action to send through to Cell component via matchDispatchToProps.
import { clickCell } from "../actions/cells";
// brings in Cell component to export mapStateToProps and mapDispatchToProps to.
import Cell from "../components/Cell";

// brings additional props into Cell.
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
