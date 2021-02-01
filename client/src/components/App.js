import { Component } from "react";
import { withRouter } from "react-router";
import { Route } from "react-router-dom";

import Navbar from './navbar/Navbar';
import ProductDetail from "./productdetail/ProductDetail";
import Products from "./products/Products";

import './App.css';
import './Grid.css';

class App extends Component {

  render() {
    return (
        <div>
          <Navbar />
          <Route exact path="/items"      component={Products}/>
          <Route exact path="/items/:id"  component={ProductDetail}/>
        </div>
    );
  }
}

export default withRouter(App);
