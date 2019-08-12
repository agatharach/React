import React from "react";
import logosmall from "./../assets-final-project-fe/img/logo-ALTA-v2.png";
import fb from "./../assets-final-project-fe/img/ic_fb.png";
import twitter from "./../assets-final-project-fe/img/ic-twitter.png";
import ig from "./../assets-final-project-fe/img/ic-instagram.png";
import LinkedIn from "./../assets-final-project-fe/img/ic-linkedin.png";

function Footer() {
    return (
        <footer className="container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 col-12 aligness">
                        <img src={logosmall} width="110 px" alt="logosmall" />
                    </div>
                    <div className="col-md-4 col-12 ">
                        <div className="SocialMedia">Social Media</div>
                        <div className="sosmed">
                            <div className="facebook aligness">
                                <img src={fb} alt="fb" />
                            </div>
                            <div className="Twitter aligness">
                                <img src={twitter} alt="twit" />
                            </div>
                            <div className="Instagram aligness">
                                <img src={ig} alt="ig" />
                            </div>
                            <div className="LinkedIn aligness">
                                <img src={LinkedIn} alt="linkedin" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-12">
                        <h5>copyright &copy; 2019 Alterra</h5>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
