import React, { Component } from 'react';
import Slider from "../../components/slider/slider 2";

//import api from './api';

class Filmes extends Component{

    state= {
        filmes: [],
    }

    async componentDidMount() {
        await fetch("/filmes")
        .then((response) => response.json())
        //.then(response => response.filter(filtro => filtro.category_id === req.param.category_id ))
        .then(response => this.setState({ filmes: response}), console.log)

        //console.log(response.data);

        //this.setState({ filmes: response.data});
    }

    render() {

        const {filmes} = this.state;

        return(
            
            <div className="App">
            <h1 className="App-title">
              <span>Netflix</span> Slider
            </h1>
            <Slider movies={filmes} />
          </div>
          

            
        )
    }
}

export default Filmes;