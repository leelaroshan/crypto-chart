import { combineReducers } from 'redux';
import  orderReducer  from './orderDetails/orderDetailsReducer';


const rootReducer = combineReducers({
  orderDetails: orderReducer,

});

export default rootReducer;
