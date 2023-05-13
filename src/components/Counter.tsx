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

class Counter extends Component {
  incrementHandler() {
    this.props.increment()
  }
  decrementHandler() {this.props.decrement()}
  toggleCounterHandler() {}


  render() {
    return (<main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={this.incrementHandler} value="increment">+</button>
        <button onClick={this.decrementHandler} value="decrement">-</button>
      </div>
      <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
    </main>)
  }
}

const mapStateToProps = (state: any) => {
  return {
    counter: state.counter
  }
}
const dispatchToProps = (dispatch: any) => {
  return {
    increment: () => dispatch({type: "increment"}),
    decrement: () => dispatch({type: "decrement"})
  }
}

export default connect(mapStateToProps, dispatchToProps ) (Counter);
