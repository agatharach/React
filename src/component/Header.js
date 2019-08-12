import React from "react";
import logo from "../assets-final-project-fe/img/logo-ALTA.png";
import Search from "./Search";

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
                    <div className="col-md-3">
                        <Search />
                    </div>
                    <div className="col-md-6">
                        <ul className="menu">
                            <li>
                                <a href="home.html" id="home">
                                    home
                                </a>
                            </li>
                            <li>
                                <a href="about.html">about</a>
                            </li>
                            <li>
                                <a>experience</a>
                            </li>
                            <li>
                                <a href="contact.html">contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
