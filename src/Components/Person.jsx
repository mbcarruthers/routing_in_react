import React , { Component } from "react";


export default class Person extends Component {
    constructor( props ) {
        super(props);
        console.log(this.props.match);
        this.state = {
            person : {}
        }
    }

    addPerson( item ) {
        this.setState({
            person : item
        });
    }

    componentDidMount() {
        fetch(`http://ghibliapi.herokuapp.com${this.props.match.url}`)
            .then( (res) => {
                return res.json();
            }).then( (obj) => {
                this.addPerson(obj);
        })
    }

    render() {
        return(
            <div className="card text-center">
                <h6 className="card-title">{ this.state.person.name }</h6>
                <div className="card-body">
                    <p> Gender: { this.state.person.gender }</p>
                    <p> Age: { this.state.person.age }</p>
                    <p> Eye Color: { this.state.person.eye_color }</p>
                </div>
            </div>
        )
    }
}