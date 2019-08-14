import React from "react";
import ReactDOM from "react-dom";
import TopArticle from "./page/TopArticle";
import Profile from "./page/Profile";
import Category from "./page/Category";
import SignIn from "./page/SignIn";
import Counter from "./page/Counter";
import Button from "./page/Button";
import "./assets-final-project-fe/CSS/less/style.css";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "unistore/react";
import { store } from "./store";

// untuk mengkoneksikan dengan berbagai komponen
// export default connect("is_login,username,password",actions)(withRouter(SignIn));
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Routing = (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/profile" component={Profile} />
                <Route path="/category/:id" component={Category} />
                <Route path="/signin" component={SignIn} />
                <Route path="/" component={TopArticle} />
            </Switch>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(Routing, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
