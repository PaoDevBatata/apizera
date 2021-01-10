import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Login from './pages/login/login';
import CriarConta from './pages/create account/create-account';
import Filmes from './pages/filmes/filmes';
import Home from './pages/home/home';
import Series from './pages/series/series';
import Lives from './pages/lives/lives';

function Router(){
        return(
                <BrowserRouter>
                        <Switch>
                                <Route exact path="/" component={Login} />
                                <Route path="/criar-conta" component={CriarConta} />
                                <Route path="/home" component={Home} />
                                <Route path="/filmes" component={Filmes} />
                                <Route path="/series" component={Series} />
                                <Route path="/lives" component={Lives} />
                        </Switch>
                </BrowserRouter>
        )
}

export default Router;