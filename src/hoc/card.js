import React from "react";
import '../css/style.css';

const Card = (props) => {

    return (
        <div className={'card'}>
            {props.children}
            <hr/>
        </div>
    );
};

export default Card;