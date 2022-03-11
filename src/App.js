import React from "react";
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Film from "./components/Pages/Film/Film";
import Setting from "./components/Pages/Setting/Setting";
import ToBeSeen from "./components/Pages/ToBeSeen/ToBeSeen";
import SearchContainer from "components/Pages/Search/SearchContainer";
import FilmListContainer from "components/Pages/FilmList/FilmListContainer";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <div className={'app-wrapper-content'}>
                    <Route path={'/film/item/'} render={() => <Film />} />
                    <Route path={'/setting'} render={() => <Setting />} />
                    <Route exact path={'/search'} render={() => < SearchContainer />} />
                    <Route exact path={'/toBeSeen'} render={() => <ToBeSeen />} />
                    <Route exact path={'/Film/list'} render={() => <FilmListContainer />} />
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;