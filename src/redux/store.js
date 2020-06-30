import { createStore, combineReducers, compose } from "redux";
import persistState from 'redux-localstorage';
import redPersons from "./redPersons";


const reducer = combineReducers({
  redPersons
});

const enhancer = compose(persistState());

const store = createStore(reducer, {}, enhancer);

export default store;
