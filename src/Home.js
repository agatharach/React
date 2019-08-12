import React from "react";
import logo from "./assets-final-project-fe/img/logo-ALTA.png";
import homeimg from "./assets-final-project-fe/img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg";
import "./assets-final-project-fe/CSS/less/style.css";

function Home() {
    return (
        <body className="home">
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
            <div className="wrapper-home">
                <div className="container-fluid ">
                    <div className="row align-items-center contain">
                        <div className="col-md-5  col-12 content">
                            <div className="logo">
                                <img
                                    src={homeimg}
                                    alt="home"
                                    className="home-image"
                                />
                            </div>
                        </div>
                        <div className="col-md-7 col-12">
                            <div className="name1">Hi, my name is</div>
                            <div className="name2">Anne Sullivan</div>
                            <div className="name3">
                                I build things for the web
                            </div>
                            <a className="name4" href="contact.html">
                                Get in Touch
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
}

export default Home;
