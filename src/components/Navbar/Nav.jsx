import React from "react";
import classes from './Nav.module.css'
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/profile">Profile</NavLink>
            </div>

            <div className={classes.item}>
                <NavLink to={'/messages'}>Messages</NavLink>
            </div>

            <div className={classes.item}>
                <NavLink to={'/news'}>News</NavLink>
            </div>

            <div className={classes.item}>
                <NavLink to={'/settings'}>Settings</NavLink>
            </div>
        </nav>
    );
}

export default Nav;