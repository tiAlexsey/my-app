import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Film from "./components/Pages/Film/Film";
import Setting from "./components/Setting/Setting";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            {/*<Film/>*/}
            <Setting/>
        </div>
    );
}


export default App;
