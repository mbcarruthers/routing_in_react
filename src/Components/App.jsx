import React , { Component } from "react";
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import Button from "./Button.jsx";
import Films from "./Films.jsx";
import People from "./People.jsx";
import Home from "./Home.jsx";

export default class App extends Component {

    render() {
        return(
            <div className="container App">
                <BrowserRouter>
                    <React.Fragment>
                        <div className="inline-block">
                            <Button text="Go Home" to="/"/>
                            <Button text="View People" to="/people" />
                            <Button text="View Films" to="/films"/>
                        </div>
                    </React.Fragment>
                    <Switch>
                        <Route exact path="/" component={ Home } />
                        <Route exact path="/people" component={ People } />
                        <Route exact path="/films" component={ Films } />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}