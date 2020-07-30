import React from 'react';
import Controls from './Controls';
import Value from './Value';
import { connect } from 'react-redux';
import './Counter.css';
import * as actions from '../../redux/actions';

const Counter = ({ counterValue, onIncrement, onDecrement }) => {
  return (
    <div className="Counter">
      <Value value={counterValue} />
      <Controls onIncrement={onIncrement} onDecrement={onDecrement} />
    </div>
  );
};

const mapStateToProps = state => {
  return { counterValue: state.counterValue };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: () => dispatch(actions.increment(5)),
    onDecrement: () => dispatch(actions.decrement(5)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
