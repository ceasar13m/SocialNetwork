import React from "react";


class AuthRestRequest {

    async signUp(username, password) {

        let signUpMessage = {
            username: username.current.value,
            password: password.current.value
        };


        let response = await fetch("http://localhost:8080/signUp", {
            method: 'POST',
            body: JSON.stringify(signUpMessage)
        });

        let result = await response.json();
        return result;

    }


    async signIn(username, password) {
        let signInMessage = {
            username: username,
            password: password
        };


        let response = await fetch("http://localhost:8080/signIn", {
            method: 'POST',
            body: JSON.stringify(signInMessage)
        });

        let result = await response.json();
        return result;

    }
}


export default AuthRestRequest;