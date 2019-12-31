import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";


class MyPosts extends React.Component {
    constructor(props) {
        super(props);
        this.inputTextRef = React.createRef();
        this.addPost = this.addPost.bind(this);
    }



    addPost() {
        let post = {
            id: 10,
            message: this.inputTextRef.current.value,
            likeCounter: 29
        }
        this.props.dataController.addPost(post);
        this.setState({posts: post});
    }


    render() {
        let posts = this.props.posts.map((post) => {
                return <Post message={post.message}/>
            }
        )

        return (
            <div className={classes.myPosts}>
                <input type="text" ref={this.inputTextRef}/>
                <input type="button" value="Отправить" onClick={this.addPost}/>
                <div className={classes.posts}>
                    {posts}
                </div>
            </div>
        )
    }
}

export default MyPosts;