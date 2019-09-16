import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component.jsx";
import Playground from "./pages/playground/playground.component";
import Header from "./components/header/header.component";
import SignInAndSingUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

// reprendre à '4. Header Component.mp4'

// cd ecommerce-app
// yarn start
// yarn add node-sass
// git remote set-url origin https://github.com/USERNAME/REPOSITORY.git

const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/playground" component={Playground} />
        <Route path="/signin" component={SignInAndSingUpPage} />
      </Switch>
    </div>
  );
}

export default App;
