import React from "react";
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Film from "./components/Pages/Film/Film";
import Setting from "./components/Pages/Setting/Setting";
import Search from "./components/Pages/Search/Search";
import ToBeSeen from "./components/Pages/ToBeSeen/ToBeSeen";
import Viewed from "./components/Pages/Viewed/Viewed";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <div className={'app-wrapper-content'}>
                    <Route exact path={'/FilmPage'}
                        render={() => <Film
                            filmPage={props.state.filmPage}
                            dispatch={props.dispatch}
                            newCommentText={props.state.filmPage.newCommentText}
                        />}
                    />
                    <Route path={'/setting'} render={() => <Setting />} />
                    <Route exact path={'/search'}
                        render={() => < Search
                            searchResultPage={props.state.searchResultPage}
                            dispatch={props.dispatch}
                            newSearchText={props.state.searchResultPage.newSearchText}
                        />}
                    />
                    <Route exact path={'/toBeSeen'} render={() => <ToBeSeen />} />
                    <Route exact path={'/Viewed'} render={() => <Viewed />} />
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;