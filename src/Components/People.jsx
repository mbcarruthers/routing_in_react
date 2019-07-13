import React , { Component } from "react";
import "isomorphic-fetch";
import "es6-promise";
import {Link} from "react-router-dom";


export default class People extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people : []
        }
    }
    addPerson( person ) {
        this.setState({
            people : [person , ...this.state.people]
        })
    }
    componentDidMount() {
        fetch("http://ghibliapi.herokuapp.com/people")
            .then( (res) => {
                return res.json();
            }).then( (obj) => {
                obj.forEach( (person) => {
                    this.addPerson(person);
                })
        }).catch( (error) => {
            console.log(`There was an error with the people request ${error}`);
        });

    }

    render() {
        const people_cards = this.state.people.map( (item , index) => {
            return(
                <li key={index}>
                    <div className="card m-3 shadow text-center">
                        <Link  className="btn btn-primary m-3" to={`people/${item.id}`}>
                            <p>{item.name}</p>
                        </Link>
                    </div>
                </li>
            )
        });
        return(
            <div className="container-fluid text-center">
                <h4>People</h4>
                <ul className="list-unstyled">
                    { people_cards }
                </ul>
            </div>
        );
    }
}