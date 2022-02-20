import { ORDER_DETAILS } from '../types';

const initialState = {

  order_details: [],
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ORDER_DETAILS':
      return { ...state, order_details: action.payload };

    default:
      return state;
  }
};

export default orderReducer;
