import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

export default function Nav() {
  return (
    <nav>
      <h1>Math Magicians</h1>
      <ul className="navContain">
        <Link to='/'>
        <li className="nav-item">Home</li>
        </Link>
        <Link to='/calc'>
        <li className="nav-item" data-testid="calculator">Calculator</li>
        </Link>
        <Link to='/quote'>
        <li className="nav-item">Quote</li>
        </Link>
      </ul>
    </nav>
  );
}