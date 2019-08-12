import React from "react";

function ListArticle() {
    const judul = [
        "Gabung Alpha Tech Academy Sekarang!",
        "Ada apa antara Kobar dan Hasan?",
        "Mengenai Arafat Sang Master Python",
        "Belajar reactJS itu seru. Kamu setuju?",
        "Sudahkah kamu sehat mental?"
    ];
    return (
        <div class="container sidebar">
            <div class="row border p-2">
                <div class="col-6 font-weight-bold text-left">
                    {" "}
                    BERITA TERKINI{" "}
                </div>
                <div class="col-6 text-right">
                    {" "}
                    <a href="/#">lihat semua</a>{" "}
                </div>
            </div>
            {judul.map(function(judl, index) {
                return (
                    <div class="row border p-2">
                        <div class="col-12 text-left">
                            <span class="bg-danger py-1 px-2 rounded">
                                #{index}
                            </span>
                        </div>
                        <div class="col-12 text-left py-1">{judl}</div>
                    </div>
                );
            })}
        </div>
    );
}
export default ListArticle;
