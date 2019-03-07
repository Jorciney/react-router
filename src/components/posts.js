import React, {Component} from "react";
import {Link} from "react-router-dom";
import Auth from '../hoc/auth';

class Posts extends Component {

    state = {pw: undefined};
    setWrongPw = () => {
        this.setState({
            pw: 'wrongPw'
        })
    };

    setCorrectPw = () => {
        this.setState({
            pw: 'password123'
        })
    };

    render() {
        return (
            <div>
                <button onClick={this.setWrongPw}>Try Wrong pw</button>
                <button onClick={this.setCorrectPw}>Try correct pw</button>
                <br/>
                <Auth password={this.state.pw}>
                    <div>
                        <Link to={"/posts/1/DB"}>Post 1</Link><br/>
                        <Link to={"/posts/2/JDC"}>Post 2</Link><br/>
                        <Link to={"/posts/3/MG"}>Post 3</Link>
                    </div>
                </Auth>
            </div>
        );
    }
}

export default Posts;