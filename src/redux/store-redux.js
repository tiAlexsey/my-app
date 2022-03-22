import { applyMiddleware, combineReducers, createStore } from "redux";
import filmReducer from "./film-reducer";
import searchResultReducer from "./search-result-reducer";
import filmListReducer from "./film-list-reducer";
import thunkMiddleWare from "redux-thunk";
import authReducer from "./auth-reducer";
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
    filmPage: filmReducer,
    searchResultPage: searchResultReducer,
    filmListPage: filmListReducer,
    auth: authReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

// @ts-ignore
window.store = store;

export default store;