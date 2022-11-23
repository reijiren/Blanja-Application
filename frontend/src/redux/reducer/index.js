import { combineReducers } from "redux";
import userReducer from "./user";
import chatReducer from "./chat";
import addressReducer from "./address";

const rootReducer = combineReducers({
    user: userReducer,
    chat: chatReducer,
    address: addressReducer,
});

export default rootReducer;