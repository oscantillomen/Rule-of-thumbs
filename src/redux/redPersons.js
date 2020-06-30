import { PERSONS } from "./actPersons";

const reducer = (state = "", action) => {
  switch (action.type) {
    case PERSONS:
      return Object.assign({}, state, {
        persons: action.persons
      });

    default:
      return state;
  }
};

export default reducer;
