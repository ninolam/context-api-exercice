import React from 'react';
import Transaction from './components/Transaction/Transaction';

// import { BrowserRouter as Router, Switch } from "react-router-dom";
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h2> Suivi des revenus </h2>
      <Transaction />
    </div>
  );
}

export default App;
