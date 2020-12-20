import React from 'react';
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import { createBrowserHistory } from "history";
import { Route, Router, Switch, withRouter } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';

const history = createBrowserHistory()

function App(props) {

  return (
    <Router history={history}>

      <NavBar />
      <div className="page-container">
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/product/:id" component={ProductDetails} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default withRouter(App);
