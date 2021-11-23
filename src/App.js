import React from 'react';
import Calc from './components/calc.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { result: 0, num1: '', num2: '' };
  }

  render() {
    return (
    <Calc/>

    );
  }
}
export default App;