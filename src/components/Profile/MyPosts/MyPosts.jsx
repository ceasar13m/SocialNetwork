import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import Message from "../../Dialogs/Dialog/Message";


const MyPosts = (props) => {


    let posts = props.props.props.post.map((post) => {
            return <Post message={post.message}/>
        }
    )

    return (
        <div className={classes.myPosts}>
            <div>
                <textarea id='textura'></textarea>
            </div>

            <div>
                <button>add</button>
            </div>


            <div className={classes.posts}>
                {posts}
            </div>

        </div>

    )
}

export default MyPosts;