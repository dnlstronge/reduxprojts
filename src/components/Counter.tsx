import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { initS } from '../Store';
import { counterActions } from '../Store';


const Counter = () => {

  const dispatch = useDispatch()
  const counter = useSelector((state: initS) => state.counter);
  const showCounter = useSelector((state: initS) => state.showCounter)

  /* handlers */
  const incrementHandler = () => {
    dispatch(counterActions.increment())
  }
  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  }
  const increaseHandler = () => {
    dispatch(counterActions.increase(10))
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
