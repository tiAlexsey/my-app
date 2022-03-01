import './index.css';
import reportWebVitals from './reportWebVitals';
import state, { subscribe } from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { addComment, updateNewComment } from "./redux/state";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                addComment={addComment}
                updateNewComment={updateNewComment}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
