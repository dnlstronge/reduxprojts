import classes from './Counter.module.css';
import { useSelector, useDispatch, connect} from 'react-redux';
import { Component } from 'react';


const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector((state: any) => state.counter);

  const incrementHandler = () => {
    dispatch({ type: "increment" })
  }
  const decrementHandler = () => {
    dispatch({ type: "decrement" })
  }

  const toggleCounterHandler = (e: React.MouseEvent<HTMLButtonElement>) => {

  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler} value="increment">+</button>
        <button onClick={decrementHandler} value="decrement">-</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
