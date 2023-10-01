import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import UtilReducer from "./UtilStore/utilReducer";
import PaymentReducer from "./PaymentStore/paymentReducer";

const reducer = combineReducers({
    UtilReducer,
    PaymentReducer
})

const middleware = applyMiddleware(thunk)
const store = createStore(reducer, middleware)

export default store