import { createStore } from "redux";

const counterReducer = (state = {counter: 0, showCounter: false}, action: {type: string, payload: number}) => {

    if(action.type === "showCounter") {
        return {
            counter: state.counter,
            showCounter: true
        }
    }
    if(action.type === "increment") {
        return {
            counter: state.counter + 1,
            showCounter: true

        }
    }
    if(action.type === "decrement") {
        return {
            counter: state.counter -1,
            showCounter: true
        }
    }
    if(action.type === "increase") {
        
        return {
            counter: state.counter + action.payload,
            showCounter: true
        }
    }
    return state;
}

const store = createStore(counterReducer)

export default store;