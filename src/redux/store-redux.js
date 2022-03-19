import { applyMiddleware, combineReducers, createStore } from "redux";
import filmReducer from "./film-reducer";
import searchResultReducer from "./search-result-reducer";
import filmListReducer from "./film-list-reducer";
import thunkMiddleWare from "redux-thunk";

let reducers = combineReducers({
    filmPage: filmReducer,
    searchResultPage: searchResultReducer,
    filmListPage: filmListReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

// @ts-ignore
window.store = store;

export default store;