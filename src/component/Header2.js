import React from "react";
import logo from "../assets-final-project-fe/img/logo-ALTA.png";
import Logosearch from "../assets-final-project-fe/img/kaca-pembesar.jpg";
import { Link } from "react-router-dom";

function Headernews(props) {
    const clickSignOut = () => {
        localStorage.setItem("username", "");
        localStorage.setItem("password", "");
        localStorage.setItem("status", "");
    };
    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <div className="row">
                            <div className="col-md-4 logonews">
                                <a>
                                    <img src={logo} alt="Logo" width="80px" />
                                    Lambe Turah
                                </a>
                            </div>
                            <div className="col-md-8">
                                <ul className="menunews">
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/profile">Profile</Link>
                                    </li>
                                    <li>
                                        <Link to="/category/bussines">
                                            Bussines
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/category/health">
                                            Health
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/category/science">
                                            Science
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/category/sports">
                                            Sports
                                        </Link>
                                    </li>
                                    <li>
                                        <button
                                            className="btn btn-default dropdown-toggle"
                                            type="button"
                                            data-toggle="dropdown"
                                        >
                                            <a>lainnya</a>
                                            <span className="caret" />
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="row">
                            <div className="col-md-8 justify-align-center, search">
                                <div className="topnav">
                                    <div className="search-container">
                                        <form action="/action_page.php">
                                            <input
                                                type="text"
                                                placeholder="Search"
                                                name="search"
                                                onChange={props.doSearch}
                                            />
                                            <img
                                                src={Logosearch}
                                                alt="kacapembesar"
                                                width="20px"
                                            />
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <ul className="menu">
                                    <li>
                                        <Link to="/signin">SignIn</Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/signout"
                                            onClick={clickSignOut}
                                        >
                                            SignOut
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
export default Headernews;
