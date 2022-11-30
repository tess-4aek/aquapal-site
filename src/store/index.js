import { createStore, combineReducers } from "redux"
import { sitePosReducer } from "./sitePosReducer";

const rootReducer = combineReducers({
    pos: sitePosReducer
});

export const store = createStore(rootReducer)
