import React from 'react';
import axios from 'axios';

export class Players extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            player: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:5000/api/players")
        .then(res => {
            this.setState({
                player: res.data
            })
        })
    }
    
    render() {
        return(
            <div data-testid="player">
                {this.state.player.map(p => 
                    <div className="players" key={p.id}>
                    <h2>Name: {p.name}</h2>
                    <h2>Country: {p.name}</h2>
                    <h2>Searches: {p.searches}</h2>
                    </div>)}
            </div>
        )
    }
}

