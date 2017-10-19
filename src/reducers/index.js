import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import EmailReducer from './email_reducer';
const rootReducer = combineReducers({
  emails: EmailReducer
});

export default rootReducer;
