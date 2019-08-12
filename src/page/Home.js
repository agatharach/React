import React from "react";
import homeimg from "../assets-final-project-fe/img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg";
import Header from "../component/Header";

function Home() {
    return (
        <body className="home">
            <Header />
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
