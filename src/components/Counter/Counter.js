import React from 'react';
import Controls from './Controls';
import Value from './Value';
import { connect } from 'react-redux';
import './Counter.css';
import * as actions from '../../redux/counter/counter-actions';

const Counter = ({ counterValue, step, onIncrement, onDecrement }) => {
  return (
    <div className="Counter">
      <Value value={counterValue} />
      <Controls
        step={step}
        onIncrement={() => onIncrement(step)}
        onDecrement={() => onDecrement(step)}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    counterValue: state.counter.value,
    step: state.counter.step,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: value => dispatch(actions.increment(value)),
    onDecrement: value => dispatch(actions.decrement(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
