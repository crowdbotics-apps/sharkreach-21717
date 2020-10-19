import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn2150233Reducer from '../features/SignIn2150233/redux/reducers'
import SignIn2150070Reducer from '../features/SignIn2150070/redux/reducers'
import SignIn2150056Reducer from '../features/SignIn2150056/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn2150233: SignIn2150233Reducer,
SignIn2150070: SignIn2150070Reducer,
SignIn2150056: SignIn2150056Reducer,

});