import { combineReducers } from 'redux';

import { authentication } from './authenticationReducer';
import { registration } from './registrationReducer';
import { users } from './usersReducer';
import { alert } from './alertReducer';
import {cartReducer} from './cartReducer'

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  cartReducer
});

export default rootReducer;