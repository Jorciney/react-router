import React from "react";
import {Link} from "react-router-dom";

const Profiles = (props) => {
    return (
        // here we use dynamic links, getting the props received from the BrowserRouter(inside the parent)
        <Link to={{pathname: `${props.match.url}/posts`}}>Take me to /profile/posts</Link>
    );
};

export default Profiles;