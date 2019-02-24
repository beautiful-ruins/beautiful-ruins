import { combineReducers } from 'redux';
import sessionReducer from './session';
import cartReducer from './cart';

export default combineReducers({
    entities: combineReducers({cart: cartReducer}),
    session: sessionReducer,
});