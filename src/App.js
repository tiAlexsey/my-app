import React from "react";
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Film from "./components/Pages/Film/Film";
import Setting from "./components/Pages/Setting/Setting";
import Search from "./components/Pages/Search/Search";
import ToBeSeen from "./components/Pages/ToBeSeen/ToBeSeen";
import Viewed from "./components/Pages/Viewed/Viewed";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/aboutFilm'} component={Film}/>
                    <Route path={'/setting'} component={Setting}/>
                    <Route path={'/search'} component={Search}/>
                    <Route path={'/toBeSeen'} component={ToBeSeen}/>
                    <Route path={'/Viewed'} component={Viewed}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
