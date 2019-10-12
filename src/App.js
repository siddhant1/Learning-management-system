import React from "react";
import "./App.css";
import Header from "./components/header/header";
import Sidebar from './components/sidebar/sidebar';
import CreatePlaylist from "./components/createPlaylist/CreatePlaylist";
import {Switch, Route, Link} from 'react-router-dom';
import ScribblePad from './components/scribble-pad/ScribblePad';
import  MainPage from './components/main-page/MainPage';
function App() {
  return (
    <div className="App">
      <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/scribble" component={ScribblePad} />
      {/* <Route path="/webcamrec" component={WebCamRecorder} />
      <Route path="/audiorec" component={AudioRecorder} /> */}
      </Switch>
    </div>
  );
}

export default App;
