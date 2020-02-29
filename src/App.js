import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import Header from './Components/header/header';
import Home from './Components/home';
import Clients from './Components/clients';
import Contact from './Components/contact';
import Products from './Components/products/products';
import './App.css';
import history from './history';

function App() {
  return (
     <div>

        <Router history={history}>
            <div>
                <Header />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/clients" exact component={Clients} />
                    <Route path="/contacts" exact component={Contact} />
                    <Route path="/products/:category?" component={Products} />
                </Switch>
            </div>

        </Router>

    </div>
  );
}

export default App;
