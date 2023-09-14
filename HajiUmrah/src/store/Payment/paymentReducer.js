import { SET_DATA_PAYMENT } from "./paymentType";


const initialState = {
    paymentData: []
}

function paymentReducer(state = initialState, action){
    switch (action.type){
        case SET_DATA_PAYMENT:
            return {...state, paymentData: action.payload}
        default:
            break;
    }

    return state
}

export default paymentReducer