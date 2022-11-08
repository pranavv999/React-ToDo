import React from "react";
import '../../styles/header/index.css'

const Header = (props) => {
    return (
        <div className="header_container">
            <h1>{props.title}</h1>
        </div>
    )
}

export default Header;