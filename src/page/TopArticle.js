import React from "react";
import ListArticle from "../component/ListArticle";
import homeimg from "../assets-final-project-fe/img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg";
import Headernews from "../component/Header2";
import axios from "axios";

// news API
const apiKey = "764b00476a6d47d5a3c7c6e035efc6c0";
const baseURL = "https://newsapi.org/v2/";
const urlheadline =
    baseURL + "top-headlines?" + "country=us&" + "apiKey=" + apiKey;
const urltopline = baseURL + "everything?" + "q=bitcoin&" + "apiKey=" + apiKey;
class TopArticle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listNews: [],
            listTop: []
        };
    }

    componentDidMount = () => {
        const self = this;
        axios
            .get(urlheadline)
            .then(function(response) {
                self.setState({ listNews: response.data.articles });
                console.log(response);
            })

            .catch(function(error) {
                console.log(error);
            });

        axios
            .get(urltopline)
            .then(function(response) {
                self.setState({ listTop: response.data.articles[0] });
                console.log(response);
            })

            .catch(function(error) {
                console.log(error);
            });
    };

    render() {
        return (
            <div>
                <Headernews />
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <ListArticle
                                news={this.state.listNews.slice(0, 5)}
                            />
                        </div>
                        <div className="col-8 text-center">
                            <div className="top">
                                <img
                                    src={this.state.listTop.urlToImage}
                                    alt="home"
                                    width="500px"
                                    height="300px"
                                />
                                <div className="row">
                                    <h3>{this.state.listTop.title}</h3>
                                    <div className="row">
                                        <p>{this.state.listTop.description}</p>
                                        <div className="row">
                                            <span className="publish">
                                                published at{" "}
                                                {this.state.listTop.publishedAt}
                                            </span>
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
}
export default TopArticle;
