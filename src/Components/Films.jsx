import React , { Component } from "react";
import {Link} from "react-router-dom";
import "isomorphic-fetch";
import "es6-promise";

export default class Films extends Component {
    constructor( props ) {
        super(props);
        this.state = {
            films : []
        };
    }

    componentDidMount() {
        fetch("http://ghibliapi.herokuapp.com/films")
            .then( (res) => {
                return res.json();
            }).then( (obj) => {
               obj.forEach( (item) => {
                   this.addFilm(item);
                   console.log(item.id);
               });
        }).catch( (error) => {
            console.log(`There was an ERROR!!! ${error}`);
        })

    }

    addFilm( film ) {
        this.setState({
            films : [film , ...this.state.films]
        });
        console.log(film);
    }

    render() {
        const films = this.state.films.map( (film , index) => {
            return(
                <li key={index}>
                    <div className="card mt-3 shadow-sm">
                        <div className="card-title text-center"><h3>{film.title}</h3></div>
                        <Link  className="btn btn-primary m-3" to={`films/${film.id}`}>
                            <p>{film.title}</p>
                        </Link>
                    </div>
                </li>
            );
        });
        return(
            <div className="container-fluid text-center">
                <h4>Films</h4>
                <ul className="list-unstyled">
                    { films }
                </ul>
            </div>
        );
    };
}
