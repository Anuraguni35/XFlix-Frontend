// import logo from './logo.svg';
import LandingPage from "./Components/LandingPage.js";
import { Route, Switch } from "react-router-dom";
import VideoPage from "./Components/VideoPage.js";
import './App.css';
import React from "react";
export const config = {
  endpoint: `https://xflix-backend-4x3l.onrender.com/v1/videos`,
};
function App() {
  return (
    <div className="App">
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/video" component={VideoPage} />
    </Switch>
     </div>
  );
}

export default App;
