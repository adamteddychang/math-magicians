import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Calc from './components/calc.js';
import Home from './components/home.js';
import Nav from './components/nav.js';
import Quote from './components/quote.js';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Nav/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/calc' element={<Calc/>}/>
            <Route path='/quote' element={<Quote/>}/>

            </Routes>

        </div>
      </Router>

    );
  }
}
export default App;