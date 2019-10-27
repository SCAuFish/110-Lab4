import React from 'react';
import logo from './logo.svg';
import './App.css';
import TeamMembers from "./components/TeamMembers";
import DisplayData from "./components/DisplayData";

function App() {
  return (
    <div>
        <TeamMembers />
        <DisplayData />
    </div>
  );
}

export default App;
