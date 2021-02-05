import React from 'react-dom';
import Reeact, {useEffect} from 'react-dom'
import Slider from '../../slider/slider-hooks'
import background from '../../../components/img/background.jpg';
import {Link} from 'wouter'
import Bodyy from './style'
import Header from '../../components/header/index'
import axios from 'axios';
var useState = React.useState

const App = () => {
  const [filmes, setFilmes] = useState({});


useEffect(() => {
    fetch('/api/filmes')
      .then(response => response.json())
      .then(response => setFilmes(response))

  }, [filmes])
  
 const [categorias,
    setCategorias] = useState([]);
    useEffect(() => {
      fetch('/api/filmes/categorias')
        .then(response => response.json())
        .then(response => setCategorias(response))
  
    }, [categorias])

 
  return (
    <Bodyy className="App">
      <div className="body">
        <img src={background} className="background" alt="Background"/>
        <Header/>
        <div className="group_B">
          {categorias.map((categoria) => (
            <div>
              <Link className="ze" to={`/filmes/${categoria.category_id}`}>
                <h2>{categoria.category_name}
                  - {filmes.filter(a => a.category_id === categoria.category_id.toString()).length}
                  Filmes</h2>
              </Link>
              <Slider movies={filmes.filter(a => a.category_id === categoria.category_id.toString())}/>
            </div>
          ))}
        </div>
      </div>
    </Bodyy>

  );
}

export default App();
