import { combineReducers } from "redux";
import userReducer from "./user";
import chatReducer from "./chat";
import addressReducer from "./address";
import productReducer from "./product"
const rootReducer = combineReducers({
    user: userReducer,
    chat: chatReducer,
    address: addressReducer,
    product: productReducer,
});

export default rootReducer;