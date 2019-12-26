import React from "react";
import classes from "./ProfileInfo.module.css"

const ProfileInfo = () => {
    return (
        <div className={classes.profileInfo}>
            <div>
                <img src="http://www.tulipclassic.com/wp-content/uploads/2016/09/abstract-header-image-grey-bokeh-XzSpJb.jpg"/>
            </div>
            <div className={classes.descriptionBlock}>
                Descriptions
            </div>
        </div>
    );
}

export default ProfileInfo;