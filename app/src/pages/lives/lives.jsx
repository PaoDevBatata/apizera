import React, { Component } from 'react';

//import api from './api';

class Filmes extends Component{

    state= {
        lives: [],
    }

    async componentDidMount() {
        await fetch("/api/lives")
        .then((response) => response.json())
        
        
        
        .then(response => this.setState({ lives: response}), console.log)
    }

    render() {

        const {lives} = this.state;

        return(
            <div>
                <h1>Lives</h1>

                {lives.map(live => ( 
                    <div key={live.num}>
                        <div className="container">
                            <div>
                                <a href={live.stream_id}>
                                    <div className="background-da-live">
                                        <img src={live.stream_icon} alt="imagem-da-live" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Filmes;