import { SET_DATA_DETAIL_MENU, SET_IS_PLAY, SET_HEADER_LABEL } from "./utilType";


const initialState = {
    utilMenuData: [],
    isPlay: false,
    headerLabel: "HAJI & UMRAH"
}

function utilReducer(state = initialState, action){
    switch (action.type){
        case SET_DATA_DETAIL_MENU:
            return {...state, utilMenuData: action.payload}
        case SET_IS_PLAY:
            return {...state, isPlay: action.payload}
        case SET_HEADER_LABEL:
            return {...state, headerLabel: action.payload}
        default:
            break;
    }

    return state
}

export default utilReducer