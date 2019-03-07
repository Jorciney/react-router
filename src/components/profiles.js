import React from "react";
import {Link, Redirect} from "react-router-dom";

const Profiles = (props) => {
    const redirect = () => {
        props.history.push('/')
    };


    return (
        <div>
            {/*// here we use dynamic links, getting the props received from the BrowserRouter(inside the parent)*/}
            <Link to={{pathname: `${props.match.url}/posts`}}>Take me to /profile/posts</Link>
            <br/>
            <button onClick={redirect}>Redirect to home</button>
        </div>
    );
};

export default Profiles;