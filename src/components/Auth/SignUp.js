import React from "react";
import classes from "./SignUp.module.css";


class SignUp extends React.Component {


    constructor(props) {
        super(props);
    }


    signUp() {

    }

    render() {
        return (
            <div className={classes.signUp}>
                <div className={classes.loginInput}>
                    <input type="text" ref={this.inputTextRef}/>
                </div>

                <div className={classes.passwordInput}>
                    <input type="password" ref={this.inputTextRef}/>
                </div>

                <input type="button" value="SignUp" onClick={this.signUp}/>

            </div>
        )
    }
}


export default SignUp;