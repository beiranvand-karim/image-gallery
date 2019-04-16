import React from "react"
import {Route, Switch} from "react-router-dom"
import {LandingPage} from "../../containers/LandingPage"

export const Routes = () => (
   <Switch>
      <Route path="/" exact component={LandingPage}/>
   </Switch>
);