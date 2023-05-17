import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { initA, initS } from '../Store';
import { counterActions } from '../Store';

type storeState = {
  counter: initS,
  auth: initA
}

const Counter = () => {

  const dispatch = useDispatch()
  const counter = useSelector((state: storeState) => state.counter.counter);
  const showCounter = useSelector((state: storeState) => state.counter.showCounter)

  /* handlers */
  const incrementHandler = () => {
    dispatch(counterActions.increment())
  }
  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  }
  const increaseHandler = () => {
    dispatch(counterActions.increase(10)) /* type: UNIQUE IDENTIFIER, payload: VALUE */
  }

  const toggleCounterHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter &&
        <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler} value="increment">+</button>
        <button onClick={decrementHandler} value="decrement">-</button>
        <button onClick={increaseHandler} >+10</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
