import React from 'react';
import classes from "./App.module.css"
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Nav from "./components/Navbar/Nav";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import DataController from './redux/DataController';



class App extends React.Component{

    constructor(props) {
        super(props);
        this.dataController = new DataController(this);
        this.state = this.dataController.getState();
        this.onDataChanged = this.onDataChanged.bind(this);
    }


    onDataChanged(newData) {
        this.setState(newData);
    }
    render() {
        return (
            <BrowserRouter>
                <div className={classes.wrapper}>
                    <Header/>
                    <Nav/>
                    <div className={classes.wrapperContent}>
                        <Route path='/profile' render={() => <Profile posts={this.state.profilePage.posts} dataController={this.dataController}/>}/>
                        <Route path='/messages' render={()=> <Dialogs dialogs={this.state.dialogsPage.dialogs} dataController={this.dataController} messages={this.state.dialogsPage.messages} />}/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }


}

export default App;
