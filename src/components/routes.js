import React from "react";
import {Switch, Route} from "react-router";
import {Catalog, Results, Home, Error} from "../pages";

export const Routes = () => {
  return (
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/results/" component={Results}/>
          <Route exact path="/catalog/" component={Catalog}/>
          <Route path ="*"><Error/></Route>
      </Switch>
  )
};

