import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import studentReducer from "./studentReducer";
import lecturerReducer from "./lecturerReducer";
import hodReducer from "./hodReducer";
import deanReducer from "./deanReducer";
import staffReducer from "./staffReducer";
import securityReducer from "./securityReducer";


export default combineReducers({
    errors:errorReducer,
    student: studentReducer,
    lecturer: lecturerReducer,
    hod: hodReducer,
    dean : deanReducer,
    staff : staffReducer,
    security: securityReducer 
});
