import React from "react";
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./Dialog/DialogItem";
import Message from "./Dialog/Message";


class Dialogs extends React.Component {


    render() {
        this.dialogItems = this.props.dialogs.map((dialog) => {
                return <DialogItem name={dialog.name} id={dialog.id}/>
            }
        )

        this.messages = this.props.messages.map((message) => {
                return <Message message={message.message}/>
            }
        )

        return (
            <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>
                    {this.dialogItems}
                </div>

                <div className={classes.messages}>
                    {this.messages}
                </div>
            </div>
        )
    }
}

export default Dialogs;