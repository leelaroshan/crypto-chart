import { ORDER_DETAILS } from '../types';
import Constant from '../../Constant';
import axios from 'axios';


export const getOrderDetails = () => (dispatch) => {
    console.log('action called');
    axios.get(Constant.getApi())
        .then((res) => {
            console.log(res);
    
            dispatch({
                type: ORDER_DETAILS,
                payload: res.data.data,
            })
        })
      .catch(err => console.log(err))


};
