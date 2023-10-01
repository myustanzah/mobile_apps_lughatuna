import { SET_DATA_PAYMENT } from "./paymentType";


export function setDataPayment(input){
    return {
        type: SET_DATA_PAYMENT,
        payload: input
    }
}