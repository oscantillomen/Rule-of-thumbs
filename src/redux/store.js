import { createStore, combineReducers } from "redux";
import redPersons from "./redPersons";
import defaultPersons from "../components/defaultPersons";

const reducer = combineReducers({
  redPersons
});

const getPersons = () => {
  const serializedPersons = localStorage.getItem("persons");
  if (serializedPersons === null) {
    localStorage.setItem("persons", JSON.stringify(defaultPersons));
    return defaultPersons;
  }
  return JSON.parse(serializedPersons);
};

const persistedState = { redPersons: getPersons() };

const store = createStore(reducer, persistedState);

export default store;
