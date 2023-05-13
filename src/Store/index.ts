import { createStore } from "redux";

const counterReducer = (state = {counter: 0}, action: {type: string}) => {
    if(action.type === "increment")
}

const store = createStore()