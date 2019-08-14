import React from "react";

function ListArticle(props) {
    return (
        <div className="container sidebar">
            <div className="row border p-2">
                <div className="col-6 font-weight-bold text-left">
                    {" "}
                    BERITA TERKINI{" "}
                </div>
                <div className="col-6 text-right">
                    {" "}
                    <a href="/#">lihat semua</a>{" "}
                </div>
            </div>
            {props.news.map(function(judl, index) {
                return (
                    <div className="row border p-2">
                        <div className="col-12 text-left">
                            <span className="bg-danger py-1 px-2 rounded">
                                #{index + 1}
                            </span>
                        </div>
                        <div className="col-12 text-left py-1">
                            {judl.title}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
export default ListArticle;
