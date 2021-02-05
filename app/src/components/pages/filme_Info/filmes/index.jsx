import React, {useState, useEffect} from 'react';
//import api from './api';
import Slider from '../../../slider/slider-hooks'
import background from '../../../components/img/background.jpg';
import {Link} from 'wouter'
import Bodyy from './style'

import Header from '../../components/header/index'

export default App = () => {

  const [filmes,
    setFilmes] = useState(localStorage.getItem(movies));
  const [categorias,
    setCategorias] = useState([])


  //pegando as series menózada
    const getFilmes = async() => {
    await fetch("/api/filmes").then((response) => response.json()).then(response => localStorage.setItem(movies, response));
    setFilmes(localStorage.getItem(movies))
    console.log(localStorage.getItem(movies))
  }
const getCategorias = async() => {
    await fetch("/api/filmes/categorias").then((response) => response.json()).then(response => localStorage.setItem(categories, response));
    setCategorias(localStorage.getItem(categories))
    console.log(categorias)
  }

  useEffect( async () => {
  //pegando os filme menózada


    //rodando as função jão
    
       getFilmes();
       getCategorias();
    
    
  }, [filmes])

  const filtrado = (num) => {
    return filmes.filter(a => a.category_id === num.toString())
  }

  return (
    <Bodyy className="App">
      <div className="body">
        <img src={background} className="background" alt="Background"/>
        <Header/>
        <div className="group_B">
          {categorias.map(categoria => (
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