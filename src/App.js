import React from 'react';
import './App.css';
import Counters from './components/counters';
import Navigation from './components/Nav';

const App  = () => {
    return (
      <React.Fragment>
        <Navigation />
        <Counters />
      </React.Fragment>
    );
};

export default App;
