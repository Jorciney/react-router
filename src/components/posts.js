import React from "react";
import {Link} from "react-router-dom";

const Posts = () => {
    return (
        <div>
            <Link to={"/posts/1/DB"}>Post 1</Link><br/>
            <Link to={"/posts/2/JDC"}>Post 2</Link><br/>
            <Link to={"/posts/3/MG"}>Post 3</Link>
        </div>
    );
};

export default Posts;