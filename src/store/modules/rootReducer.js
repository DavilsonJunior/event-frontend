import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import eventcontent from './eventcontent/reducer';

export default combineReducers({
  auth,
  user,
  eventcontent,
});
