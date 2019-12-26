import React from "react";
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./Dialog/DialogItem";
import Message from "./Dialog/Message";


const Dialogs = (props) => {
    let dialogItems = props.dialogs.map((dialog) => {
            return <DialogItem name={dialog.name} id={dialog.id}/>
        }
    )


    let messages = props.messages.map((message) => {
            return <Message message={message.message}/>
        }
    )
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogItems}
            </div>

            <div className={classes.messages}>
                {messages}
            </div>
        </div>
    )
}

export default Dialogs;