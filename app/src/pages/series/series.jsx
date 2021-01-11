import React, { Component } from 'react';
import Slider from "../../components/slider/slider.js";

//import api from './api';

class Series extends Component{

    state= {
        Series: [],
    }

    async componentDidMount() {
        await fetch("/api/series")
        .then((response) => response.json())
        .then(response => this.setState({ Series: response}), console.log)
    }

    render() {

        const {Series} = this.state;

        return(
            <div className="App">
        <h1 className="App-title">
          <span>Netflix</span> Slider
        </h1>
        <Slider movies={Series} />
      </div>
        )
    }
}

export default Series;