import React from "react";
import "./App.css";
import Header from "./components/header/header";
import Sidebar from './components/sidebar/sidebar';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar/>
    </div>
  );
}

export default App;
