import { combineReducers, createStore } from "redux";
import filmReducer from "./film-reducer";
import searchResultReducer from "./search-result-reducer";

let reducers = combineReducers({
    filmPage: filmReducer,
    searchResultPage: searchResultReducer
});

let store = createStore(reducers);

export default store;