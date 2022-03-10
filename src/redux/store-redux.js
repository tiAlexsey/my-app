import { combineReducers, createStore } from "redux";
import filmReducer from "./film-reducer";
import searchResultReducer from "./search-result-reducer";
import viewedReducer from "./viewed-reducer";

let reducers = combineReducers({
    filmPage: filmReducer,
    searchResultPage: searchResultReducer,
    viewedPage: viewedReducer
});

let store = createStore(reducers);

// @ts-ignore
window.store = store;

export default store;