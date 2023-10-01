import { SET_DATA_DETAIL_MENU } from "./utilType";


export function setDataDetailMenu(input){
    
    return {
        type: SET_DATA_DETAIL_MENU,
        payload: input
    }
}