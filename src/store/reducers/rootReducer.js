import {combineReducers} from "redux";
import {statusReducer} from "./statusReducer";
import {dataReducer} from "./dataReducer";

export const rootReducer = combineReducers({
    data: dataReducer,
    status: statusReducer
})