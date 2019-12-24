import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <textarea></textarea>
            <button>Add</button>

            <div className={classes.posts}>
                <Post name='Ainur'/>
                <Post name='Ainur'/>
                <Post name='Ainur'/>
            </div>
        </div>

    )
}

export default MyPosts;