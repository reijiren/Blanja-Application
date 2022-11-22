import { combineReducers } from "redux";
import userReducer from "./user";
import chatReducer from "./chat";

const rootReducer = combineReducers({
    user: userReducer,
    chat: chatReducer,
});

export default rootReducer;