import React from 'react';
import CountPage from './components/Counter/CountPage';
import Transaction from './components/Transaction';

// import { BrowserRouter as Router, Switch } from "react-router-dom";
import './App.css';

const App = () => {
  return (
    <div className="App">
        <Transaction />
    </div>
  );
}

export default App;
