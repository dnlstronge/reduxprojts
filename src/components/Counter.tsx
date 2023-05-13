import classes from './Counter.module.css';
import { useSelector, useDispatch} from 'react-redux';


const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector((state: any) => state.counter);

  const toggleCounterHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    
    const incrementHandler = () => {
      dispatch({type: "increment"})
    }
    const decrementHandler = () => {
      dispatch({type: "decrement"})
    }
    
    if(e.currentTarget.value === "increment") {
      incrementHandler()
    }
    if(e.currentTarget.value === "decrement") {
      decrementHandler()
    }
   
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={toggleCounterHandler} value="increment">+</button>
        <button onClick={toggleCounterHandler} value="decrement">-</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
