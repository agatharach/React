import React from "react";
import ListArticle from "../component/ListArticle";
import Headernews from "../component/Header2";
import Headline from "../component/Headline";
import axios from "axios";
import { connect } from "unistore/react";
import { actions } from "../store";

// news API
const apiKey = "764b00476a6d47d5a3c7c6e035efc6c0";
const baseURL = "https://newsapi.org/v2/";
const urlheadline = baseURL + "top-headlines?country=us&apiKey=" + apiKey;
class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            val: ""
        };

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount = () => {
        this.setState({ val: this.props.match.params.id }, () => {
            const self = this;
            axios
                .get(urlheadline)
                .then(function(response) {
                    self.props.setlistNews(response.data.articles);
                    console.log(response);
                })

                .catch(function(error) {
                    console.log(error);
                });

            axios
                .get(
                    baseURL +
                        "everything?" +
                        "q=" +
                        self.state.val +
                        "&apiKey=" +
                        apiKey
                )
                .then(function(response) {
                    self.props.setlistTop(response.data.articles);
                    console.log(response);
                })

                .catch(function(error) {
                    console.log(error);
                });
        });
    };

    componentDidUpdate = prevProps => {
        const self = this;
        if (prevProps.match.params.id !== this.props.match.params.id) {
            axios
                .get(
                    baseURL +
                        "everything?" +
                        "q=" +
                        this.props.match.params.id +
                        "&apiKey=" +
                        apiKey
                )
                .then(response => {
                    self.props.setlistTop(response.data.articles);
                    console.log(response);
                })
                .catch(error => {
                    console.log("terdapat eror ini :", error);
                });
        }
    };

    handleChange(event) {
        const self = this;
        if (event.target.value.length > 0) {
            self.setState({ value: event.target.value }, () => {
                axios
                    .get(
                        baseURL +
                            "everything?" +
                            "q=" +
                            self.state.value +
                            "&apiKey=" +
                            apiKey
                    )
                    .then(function(response) {
                        self.props.setlistTop(response.data.articles);
                        console.log(response);
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            });
        }
    }

    render() {
        return (
            <div>
                <Headernews doSearch={this.handleChange} />
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <ListArticle
                                news={this.props.listNews.slice(0, 5)}
                            />
                        </div>
                        <div className="col-8 text-center">
                            <Headline top={this.props.listTop.slice(0, 5)} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default connect(
    "listNews,listTop",
    actions
)(Category);
