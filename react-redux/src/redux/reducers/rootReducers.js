import { combineReducers } from 'redux';
import { counterReducer } from './counter';
import { cientistasReducer } from './cientistas';

const rootReducer = combineReducers({
  cientistas: cientistasReducer,
  counter: counterReducer,
});

export default rootReducer;
