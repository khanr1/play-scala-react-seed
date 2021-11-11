import React from 'react';
import ReactDOM from 'react-dom';
import HW from './assets/hw.png'

ReactDOM.render(
    <>
    <h1>Hello World!</h1>
    <p> if you see this it means that react is working</p>
    <img src={HW} alt='La maison jungle' />

    </>,
  document.getElementById('root')
);