import React from 'react';
import classes from "./App.module.css"
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Nav from "./components/Navbar/Nav";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className={classes.wrapper}>
                <Header/>
                <Nav/>
                <div className={classes.wrapperContent}>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/messages' component={Dialogs}/>

                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
