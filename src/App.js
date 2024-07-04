import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { ISIPopup } from "./components";
import { Home } from "./screens/Home/";
import { Scan } from "./screens/Scan/";
import { Register } from "./screens/Register/";
import { Loading } from "./screens/Loading/";
import { Instructions } from "./screens/Instructions/";
import { Quiz } from "./screens/Quiz/";
import { ISI } from "./screens/ISI/";
import { Countdown } from "./screens/Countdown/";


export default function App() {
  return (
      <Router basename={'/'}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/scan" component={Scan} />
              <Route path="/register" component={Register} />
              <Route path="/loading" component={Loading} />
              <Route path="/isi" component={ISI} />
              <Route path="/instructions" component={Instructions} />
              <Route path="/quiz" component={Quiz} />
              <Route path="/isi-popup" component={ISIPopup} />
              <Route path="/countdown" component={Countdown} />
            </Switch>
            
      </Router>
  );
}
