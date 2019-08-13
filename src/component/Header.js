import React from "react";
import logo from "../assets-final-project-fe/img/logo-ALTA.png";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-12 ">
                        <div className="logo">
                            <a>
                                <img src={logo} alt="Logo" />
                            </a>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <ul className="menu">
                            <li>
                                <a id="home">home</a>
                            </li>
                            <li>
                                <a>about</a>
                            </li>
                            <li>
                                <a>experience</a>
                            </li>
                            <li>
                                <a>contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
