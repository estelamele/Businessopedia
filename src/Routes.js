import React from "react";
import { Switch, Route } from "react-router-dom";

// Components
import Home from "./components/MainView/Home/Home";
import About from "./components/MainView/About/About";
import Categories from "./components/MainView/Categories/Categories";
import Business from "./components/MainView/Categories/Business/Business";
import Blog from "./components/MainView/Blog/Blog";
import Services from "./components/MainView/Services/Services";
import Contacts from "./components/MainView/Contacts/Contacts";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/categories" component={Categories} />
      <Route exact path="/categories/:business" component={Business} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/contacts" component={Contacts} />
    </Switch>
  );
};

export default Routes;
