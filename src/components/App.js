import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage"
import NotFoundPage from "./NotFoundPage";

function App() {
    return (
        <div className="container-fluid">
            <Header />
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/courses" component={CoursesPage} />
                <Route path="/about" component={AboutPage} />
                <Route component={NotFoundPage}></Route>
                <Redirect from="/about-page" to="about" ></Redirect>
            </Switch>
        </div>
    )
}

export default App;

