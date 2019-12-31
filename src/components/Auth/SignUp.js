import React from "react";
import classes from "./SignUp.module.css";


class SignUp extends React.Component {


    constructor(props) {
        super(props);
        this.usernameRef = React.createRef();
        this.passwordRef = React.createRef();
        this.signUp = this.signUp.bind(this);
    }


    signUp() {
        let signUpMessage = {
            username: this.usernameRef.current.value,
            password: this.passwordRef.current.value
        }


        let request = new XMLHttpRequest();
        request.open("POST", "http://localhost:8080/signUp", true);

        let jsonString = JSON.stringify(signUpMessage);
        request.responseType = 'json';
        request.onreadystatechange = () => {
            if (this.readyState === this.DONE && request.readyState === 4) {
                let tokenString = JSON.stringify(request.response);
                alert(tokenString);
            }
        }
        request.send(jsonString);



    }

    render() {
        return (
            <div className={classes.signUp}>
                <div className={classes.loginInput}>
                    <input type="text" ref={this.usernameRef}/>
                </div>

                <div className={classes.passwordInput}>
                    <input type="password" ref={this.passwordRef}/>
                </div>

                <input type="button" value="SignUp" onClick={this.signUp}/>

            </div>
        )
    }
}


export default SignUp;