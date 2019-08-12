import React from "react";
import logo from "../assets-final-project-fe/img/logo-ALTA.png";
import Search from "./Search";

function Headernews() {
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
                                        <a>Sepakbola</a>
                                    </li>
                                    <li>
                                        <a>Ekonomi</a>
                                    </li>
                                    <li>
                                        <a>Politik</a>
                                    </li>
                                    <li>
                                        <a>Hiburan</a>
                                    </li>
                                    <li>
                                        <button
                                            class="btn btn-default dropdown-toggle"
                                            type="button"
                                            data-toggle="dropdown"
                                        >
                                            <a>lainnya</a>
                                            <span class="caret" />
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="row">
                            <div className="col-md-8 justify-align-center, search">
                                <Search />
                            </div>
                            <div className="col-md-4">
                                <ul className="menu">
                                    <li>Masuk</li>
                                    <li>Daftar</li>
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
