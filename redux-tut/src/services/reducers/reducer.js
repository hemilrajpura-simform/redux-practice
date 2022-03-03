import { Add_TO_CART } from '../constants';

const initialState = {
    cardData: []
};

export default function CardItems(state=initialState, action) {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case Add_TO_CART:
            return {
                ...state,
                cardData: action.data
            }   
            break;  
            default:
                return  state  
    }
}
