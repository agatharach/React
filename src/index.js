import React from "react";
import ReactDOM from "react-dom";
import TopArticle from "./page/TopArticle";
import Profile from "./page/Profile";
import Category from "./page/Category";
import SignIn from "./page/SignIn";
import "./assets-final-project-fe/CSS/less/style.css";
import * as serviceWorker from "./serviceWorker";

import { BrowserRouter, Switch, Route } from "react-router-dom";

// ReactDOM.render(<App />, document.getElementById('root'));
const Routing = (
    <BrowserRouter>
        <Switch>
            <Route path="/profile" component={Profile} />
            <Route path="/category/:id" component={Category} />
            <Route path="/signin" component={SignIn} />
            <Route path="/" component={TopArticle} />
        </Switch>
    </BrowserRouter>
);
ReactDOM.render(Routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
