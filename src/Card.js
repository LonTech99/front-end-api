import React from 'react';

export class Card extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            image:"https://logosvector.net/wp-content/uploads/2012/10/pokemon-logo-vector.png",
        }
    }

    componentDidMount() {
        console.log(this.props.uri)
        this.loadDetails()
    }

    async loadDetails() {
        const response = await fetch(`http://145.24.222.167:8000/games`)
        const json = await response.json()
        console.log(json.items)
        this.setState({game: json.items})
    }
    
    render() {
        return (
            <div className="card">
                <div>{this.props.name}</div>
                <div><img src= {this.state.image} alt="pokemon"/></div>
            </div>
        );
    }
}