import { SET_DATA_DETAIL_MENU, SET_HEADER_LABEL, SET_IS_PLAY } from "./utilType";


export function setDataDetailMenu(input){
    
    return {
        type: SET_DATA_DETAIL_MENU,
        payload: input
    }
}

export function setIsPlay(input){
    return {
        type: SET_IS_PLAY,
        payload: input
    }
}

export function setHeaderLabel(input){
    return {
        type: SET_HEADER_LABEL,
        payload: input
    }
}