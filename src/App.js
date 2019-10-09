import React from "react";
import "./App.css";
import Header from "./components/header/header";
import Sidebar from './components/sidebar/sidebar';
import CreatePlaylist from "./components/createPlaylist/CreatePlaylist";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar/>
      <CreatePlaylist/>
    </div>
  );
}

export default App;
