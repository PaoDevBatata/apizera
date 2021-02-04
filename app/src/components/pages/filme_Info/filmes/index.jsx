import React, {useState, useEffect} from 'react';
//import api from './api';
import Slider from '../../../slider/slider-hooks'
import background from '../../../components/img/background.jpg';
import {Link} from 'wouter'
import Bodyy from './style'

import Header from '../../components/header/index'

export default App = () =>{

const [filmes, setFilmes] = useState([]);
const [categorias, setCategorias] = useState([])
  
useEffect(() => {
    //pegando os filme menózada
    const getFilmes = async() => {
      await fetch("/api/filmes").then((response) => response.json()).then(response => setFilmes(response));
      console.log(filmes)
    }
    //pegando as series menózada
    const getCategorias = async() => {
      await fetch("/api/filmes/categorias").then((response) => response.json()).then(response => setCategorias(response));
      console.log(categorias)
    }
    //rodando as função jão
    const lal = async() => {
      await getFilmes();
      await getCategorias();
    }
    lal()
  })

    const filtrado = (num) => {
      return filmes
        .filter(a => a.category_id === num.toString())
    }

    return (
      <Bodyy className="App">
        <div className="body">
          <img src={background} className="background" alt="Background"/>
          <Header />
          <div className="group_B">
            {categorias
              .map(categoria => (
                <div>
                  <Link className="ze" to={`/filmes/${categoria.category_id}`}>
                    <h2>{categoria.category_name}
                      - {filtrado(categoria.category_id).length}
                      Filmes</h2>
                  </Link>
                  <Slider movies={filtrado(categoria.category_id)}/>
                </div>
              ))}
          </div>
        </div>
      </Bodyy>

    )
  }


export default Filmes;