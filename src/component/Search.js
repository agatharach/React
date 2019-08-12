import React from "react";
import Logosearch from "../assets-final-project-fe/img/kaca-pembesar.jpg";

function Search() {
    return (
        <div className="topnav">
            <div className="search-container">
                <form action="/action_page.php">
                    <input type="text" placeholder="Search" name="search" />
                    <button type="submit">
                        <img src={Logosearch} alt="kacapembesar" width="20px" />
                    </button>
                </form>
            </div>
        </div>
    );
}
export default Search;
