import React from "react"
import {Route, Switch} from "react-router-dom"
import {LandingPage} from "../../containers/LandingPage"

export function Routes(){
    return<Switch>
      <Route path="/" exact component={LandingPage}/>
   </Switch>
}

export default Routes