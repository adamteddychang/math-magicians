import React from 'react';
import './calc.css';

class Calc extends React.Component {
  render() {
    return (
<div className="calculator">
<div className="answer">0</div>
<div className="buttons"> {this.Calc}
  <button type="button" className="button">AC</button>
  <button type="button" className="button">+/-</button>
  <button type="button" className="button">%</button>
  <button type="button" className="button orange">&divide;</button>
  <button type="button" className="button">7</button>
  <button type="button" className="button">8</button>
  <button type="button" className="button">9</button>
  <button type="button" className="button orange">&times;</button>
  <button type="button" className="button">4</button>
  <button type="button" className="button">5</button>
  <button type="button" className="button">6</button>
  <button type="button" className="button orange">-</button>
  <button type="button" className="button">1</button>
  <button type="button" className="button">2</button>
  <button type="button" className="button">3</button>
  <button type="button" className="button orange">+</button>
  <button type="button" className="button double-button">0</button>
  <button type="button" className="button">.</button>
  <button type="button" className="button orange">=</button>
  {/* <button type="button" className="button"></button> */}
</div>
</div>
    );
  }
}

export default Calc;