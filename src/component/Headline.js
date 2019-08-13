import React from "react";

function Headline(props) {
    return (
        <div>
            {props.top.map(function(judl) {
                return (
                    <div>
                        <div className="top">
                            <img
                                src={judl.urlToImage}
                                alt="home"
                                width="500px"
                                height="300px"
                            />
                        </div>
                        <div className="row">
                            <h3>{judl.title}</h3>
                            <div className="row">
                                <p>{judl.description}</p>
                                <div className="row">
                                    <span className="publish">
                                        published at {judl.publishedAt}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
export default Headline;
