import React, { useState } from 'react';
import './App.css';
import Header from './component/header/Header';
import Nav from './component/nav/Nav';
import Results from './component/result/Results';
import requests from "./requests"

function App() {
  // initial state to load trending movies
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending)

  return (
    <div className="app">
      <Header />
      <Nav setSelectedOption={setSelectedOption}/>
      <Results selectedOption={selectedOption}/>
    </div>
  );
}

export default App;
