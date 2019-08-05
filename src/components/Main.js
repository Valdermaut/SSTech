import React from "react";
import { Switch, Route } from "react-router-dom";

import Landing from "./Landing";
import Discover from "./Discover";
import Product from "./Product";
import Services from "./Services";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route exact path="/Landing" component={Landing} />
    <Route path="/Discover" component={Discover} />
    <Route path="/Product" component={Product} />
    <Route path="/Services" component={Services} />
  </Switch>
);

export default Main;
