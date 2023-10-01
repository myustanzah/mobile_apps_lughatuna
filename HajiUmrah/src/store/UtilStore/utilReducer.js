import { SET_DATA_DETAIL_MENU } from "./utilType";


const initialState = {
    utilMenuData: []
}

function utilReducer(state = initialState, action){
    switch (action.type){
        case SET_DATA_DETAIL_MENU:
            return {...state, utilMenuData: action.payload}
        default:
            break;
    }

    return state
}

export default utilReducer