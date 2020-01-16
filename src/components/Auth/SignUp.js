import React from "react";
import classes from "./SignUp.module.css";
import AuthRestRequest from "../../redux/AuthRestRequest";


class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.usernameRef = React.createRef();
        this.passwordRef = React.createRef();
        this.rest = new AuthRestRequest();
        this.click = this.click.bind(this);
    }

    click() {
        let newAuth = new AuthRestRequest();
        let token = newAuth.signUp(this.usernameRef, this.passwordRef);
        alert(JSON.stringify(token));
    }


    render() {
        return (
            <div className={classes.signUp}>
                <div className={classes.loginInput}>
                    <input type="text" required ref={this.usernameRef}/>
                </div>

                <div className={classes.passwordInput}>
                    <input type="password" required ref={this.passwordRef}/>
                </div>

                <input type="button" value="SignUp" onClick={this.click}/>

            </div>
        )
    }
}


export default SignUp;