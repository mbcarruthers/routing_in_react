import React , { Component } from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import NavBar from "./NavBar.jsx";
import Films from "./Films.jsx";
import People from "./People.jsx";
import Home from "./Home.jsx";
import Film from "./Film.jsx";
import Person from "./Person.jsx";

import "isomorphic-fetch";
import "es6-promise";


export default class App extends Component {
    constructor(props) {
        super(props);
        console.log("This is not a useless constructor");
    }

    render() {
        return(
            <div className="container App">
                <BrowserRouter>
                    <React.Fragment>
                        <div className="inline-block">
                            <NavBar />
                        </div>
                    </React.Fragment>
                    <Switch>
                        <Route exact path="/" component={ Home } />
                        <Route exact path="/people" component={ People } />
                        <Route exact path="/films" component={ Films } />
                        <Route exact path="/films/:id" component={ Film } />
                        <Route exact path="/people/:id" component={ Person } />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}