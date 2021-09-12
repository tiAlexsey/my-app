import React from "react";
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Info from "./components/Info";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <Info/>
        </div>
    );
}


export default App;
