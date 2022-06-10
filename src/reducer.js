import { combineReducers } from "redux";
import ContactListReducer from "./components/ContactListSlice";

const rootReducer = combineReducers({
    contacts: ContactListReducer
})

export default rootReducer