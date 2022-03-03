import {Add_TO_CART} from '../constants';

export const addToCart = (data) => {
    return {
        type: Add_TO_CART,
        data: data,
    }
}