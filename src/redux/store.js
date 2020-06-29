import { createStore, combineReducers } from "redux";
import redPersons from "./redPersons";


const reducer = combineReducers({
  redPersons
});

const store = createStore(reducer);

export default store;
