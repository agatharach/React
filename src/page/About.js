import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import dot from "../assets-final-project-fe/img/img-dot.png";
import homeimg from "../assets-final-project-fe/img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg";
import "../assets-final-project-fe/CSS/less/style.css";

function About() {
    return (
        <div>
            <Header />
            <div className="wrapper-about">
                <section className="about-me">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <h1>about me.</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7">
                                <p>
                                    Hello! I’m Anne Sullivan, a full-stack
                                    engineer based in Malang, IDN who enjoys
                                    building things that live on the internet. I
                                    develop exceptional websites and web apps
                                    that provide intuitive, pixel-perfect user
                                    interfaces with efficient and modern
                                    backends. <br />
                                    <br /> Shortly after graduating from Alterra
                                    Academy, I joined the engineering team at
                                    Alterra where I work on a wide variety of
                                    interesting and meaningful projects on a
                                    daily basis. <br />
                                    <br /> Here’s few technologies I’ve been
                                    working with recently :
                                </p>
                                <table>
                                    <tr>
                                        <td>HTML & CSS</td>
                                        <td className="td2">Serverless</td>
                                        <td className="td3">Scrum</td>
                                    </tr>
                                    <tr>
                                        <td>Programming</td>
                                        <td className="td2">Restful API</td>
                                        <td className="td3">Test-Driven Dev</td>
                                    </tr>
                                    <tr>
                                        <td>Database</td>
                                        <td className="td2">Javascript</td>
                                        <td className="td3">
                                            Software Testing
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Git & Github</td>
                                        <td className="td2">Single Page App</td>
                                        <td className="td3">UX/UI Designer</td>
                                    </tr>
                                </table>
                            </div>
                            <div className="col-md-5 align-items-center">
                                <div className="image-about">
                                    <img
                                        src={homeimg}
                                        alt=""
                                        className="about-me-img"
                                    />
                                    <img src={dot} alt="" className="dot" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}

export default About;
