import { useSelector, useDispatch } from 'react-redux'

import { counterActions } from '../store';

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();

  const counter = useSelector(state => state.counter.counter);
  //Hook used to get the data out of the store

  const show = useSelector(state => state.showCounter);

  const incrementHandler = () => {
    // dispatch({
    //   type: 'increment'
    // });
    dispatch(counterActions.increment());
    //full action object automatically created for us
  };

  const increaseHandler = () => {
    // dispatch({
    //   type: 'increase',
    //   amount: 5
    // });
    dispatch(counterActions.increase(5));
    //will create { type: SOME_UNIQUE_IDENTIFIER, payload: 5}
    //that's why we have to use action.payload in the store and not action.amount
  };

  const decrementHandler = () => {
    // dispatch({
    //   type: 'decrement'
    // });
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter)
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>
      }
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
