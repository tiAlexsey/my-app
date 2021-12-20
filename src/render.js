import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addComment} from "./redux/state";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addComment={addComment}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}