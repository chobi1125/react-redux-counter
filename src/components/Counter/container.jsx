import { connect } from "react-redux";
import { increment, decrement } from "../../redux/count/actions";

import counter from "./presentation";

const mapStateProps = ({ count }) => ({ count });

const mapDispatchProps = dispatch => ({
  increment: count => {
    dispatch(increment(count));
  },
  decrement: count => {
    dispatch(decrement(count));
  }
});

export default connect (
  mapStateProps,
  mapDispatchProps
)(counter);