import React from "react";
import classes from './Post.module.css'
import Message from "../../../Dialogs/Dialog/Message";



const Post = (props) => {
    return <div className={classes.item}>{props.message}</div>
}

export default Post;