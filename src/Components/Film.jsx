import React , { Component } from "react";
import "isomorphic-fetch";
import "es6-promise";

export default class Film extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.match.url);
        this.state = {
            film : {}
        }
    }
    componentDidMount() {
        fetch(`http://ghibliapi.herokuapp.com${this.props.match.url}`)
            .then( (res) => {
                return res.json();
            }).then( (obj) => {
                this.setState({
                    film : obj
                });
                console.log(this.state.film);
        }).catch( (error) => {
            console.log(`there was an error!@@@ ${error}`);
        })
    }
    render() {
        return(
            <div className="card m-3 text-center">
                <h4>{ this.state.film.title }</h4>
                <p>{ this.state.film.description }</p>
                <h6> Directed by { this.state.film.director }</h6>
                <h6> Produced by { this.state.film.producer }</h6>
                <h6>Release Date {this.state.film.release_date }</h6>
            </div>
        )
    }
}