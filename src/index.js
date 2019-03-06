import React from "react";
import * as ReactDOM from "react-dom";
import {BrowserRouter, Route, Link, NavLink} from 'react-router-dom';


// COMPONENTS
import Home from './components/home';
import Posts from './components/posts';
import Profile from './components/profiles';
import PostItem from './components/post_item';


const App = () => {
    return (
        <BrowserRouter>
            <div>
                <header>
                    <Link to="/">Home</Link><br/>
                    <Link to={"/posts"}>Posts</Link><br/>
                    <Link to={{
                        pathname: "/profile",
                        hash: "#jdc",
                        search: "profile=true"
                    }} >Profile</Link><br/>
                    <hr/>
                    <NavLink to="/">Home</NavLink><br/>
                    <NavLink to={"/posts"} activeStyle={{color:'red'}}>Posts</NavLink><br/>
                    <NavLink to={{
                        pathname: "/profile",
                        hash: "#jdc",
                        search: "profile=true"
                    }} >Profile</NavLink><br/>

                </header>
                <Route path="/" exact component={Home}/>
                <Route path="/posts" component={Posts}/>
                <Route path="/posts/:id/:username" component={PostItem}/>
                <Route path="/profile" component={Profile}/>
            </div>
        </BrowserRouter>
    );
};

ReactDOM.render(<App/>,
    document.querySelector('#root'));