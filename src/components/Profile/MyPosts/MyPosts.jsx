import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";


class MyPosts extends React.Component {
    constructor(props) {
        super(props);
        this.inputTextRef = React.createRef();
        this.addPost = this.addPost.bind(this);
    }

    posts = this.props.posts.map((post) => {
            return <Post message={post.message}/>
        }
    )

    addPost() {
        this.props.dataController.addPost(this.inputTextRef.current.value);
    }

    render() {
        return (
            <div className={classes.myPosts}>
                <input type="text" ref={this.inputTextRef}/>
                <input type="button" value="Отправить" onClick={this.addPost}/>
                <div className={classes.posts}>
                    {this.posts}
                </div>
            </div>
        )
    }
}

export default MyPosts;