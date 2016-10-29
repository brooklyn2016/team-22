import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import auth from './auth_reducer';
import lessons from './lessons_reducer';
import leader from './leaderBoard_reducer';


const rootReducer = combineReducers({
  form,
  auth,
  lessons,
  leader
});

export default rootReducer;
