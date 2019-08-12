import React from "react";
import ListArticle from "../component/ListArticle";
import homeimg from "../assets-final-project-fe/img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg";
import Headernews from "../component/Header2";

function TopArticle() {
    return (
        <div>
            <Headernews />
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <ListArticle />
                    </div>
                    <div className="col-8 text-center">
                        <div className="top">
                            <img
                                src={homeimg}
                                alt="home"
                                width="500px"
                                height="300px"
                            />
                            <div className="row">
                                <h3>
                                    Ingat dengan Wanita ini? Fakta Nomor 7
                                    Mencengangkan
                                </h3>
                                <div className="row">
                                    <p>
                                        Anne Sulivan berhasil menggemparkan
                                        dunia kembali, yuk baca sampai akhir.
                                    </p>
                                    <div className="row">
                                        <span>Last updated 3 mins ago</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default TopArticle;
