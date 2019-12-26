import React from "react";
import Post from "./MyPosts/Post/Post";
import MyPosts from "./MyPosts/MyPosts";
import classes from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className={classes.profile}>
            <ProfileInfo props={props}/>
            <MyPosts props={props}/>
        </div>
    );
}

export default Profile;