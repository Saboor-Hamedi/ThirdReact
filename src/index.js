import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { Letters, IClicked } from './Letter'
import {Squer, Label, Card} from './card'
import './style.css';

function App() { 
  const [toggle, setToggle] = useState(false);
  function Display() { 
    setToggle((prev) => !prev);
  }
  return (
    <div>
      <div className={toggle ? 'active' : ''}><h1>Hello world</h1></div>
      <button onClick={Display}>Click me</button>
    </div>
  )
}
ReactDOM.render(
  <App />, document.querySelector('#root')
)

const letter = document.querySelector('#letters');
ReactDOM.render(
  <div>
    <Letters bgcolor="#58B3FF">S</Letters>
    <Letters bgcolor="#35FE33">A</Letters>
    <Letters >B</Letters>
    <Letters >O</Letters>
    <Letters >O</Letters>
    <Letters >R</Letters>
    
  </div>,

  letter
)

const card = document.querySelector('#cards');
ReactDOM.render(
  <div className="Mycards">
      <Card />
      <Card />
    <Card />
    <Card />
</div>,
    card
 
)

