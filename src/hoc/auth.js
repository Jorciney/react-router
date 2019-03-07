import React from "react";

const Auth = (props) => {
    const pass = 'password123';
    if (props.password !== pass) {
        return (
            <h2>
                You are not authorized
            </h2>)
    } else {
        return props.children;
    }
};

export default Auth;