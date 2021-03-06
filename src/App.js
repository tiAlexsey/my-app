import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Setting from './components/Pages/Setting/Setting';
import ToBeSeen from './components/Pages/ToBeSeen/ToBeSeen';
import SearchContainer from 'components/Pages/Search/SearchContainer';
import FilmListContainer from 'components/Pages/FilmList/FilmListContainer';
import FilmContainer from 'components/Pages/Film/FilmContainer';
import Login from 'components/Pages/Login/Login';
import Viewed from 'components/Pages/Viewed/Viewed';


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <Header />
                    <Navbar />
                    <div className={'app-wrapper-content'}>
                        <Route path={'/film/Item/:filmId'} render={() => <FilmContainer />} />
                        <Route path={'/setting'} render={() => <Setting />} />
                        <Route exact path={'/search'} render={() => < SearchContainer />} />
                        <Route exact path={'/toBeSeen'} render={() => <ToBeSeen />} />
                        <Route exact path={'/Film/list'} render={() => <FilmListContainer />} />
                        <Route exact path={'/login'} render={() => <Login />} />
                        <Route exact path={'/viewed'} render={() => <Viewed />} />
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}


export default App;