import React from "react";
import Post from "./MyPosts/Post/Post";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>Avatar</div>
            <div>Descriptions</div>
            <div>MyPosts</div>
            <MyPosts/>
        </div>
    );
}

export default Profile;