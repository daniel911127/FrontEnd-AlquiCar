import { createStore, combineReducers } from 'redux';
import bookingReducer from './reducers/bookingReducer';
import carReducer from './reducers/carReducer';
import commentsReducer from './reducers/commentsReducer';
import userReducer from './reducers/userReducer';

const rootReducer = combineReducers({
  bookingReducer,
  carReducer,
  commentsReducer,
  userReducer,
});
export const store = createStore(rootReducer);
