import React from 'react';
import ReactDOM from 'react-dom';
import HW from './assets/hw.png'
import './styles/index.css';
import './styles/index.scss'


ReactDOM.render(
    <>
    <h1 class='cssTest'>Hello World!</h1>
    <p class='scssTest'> if you see this it means that react is working</p>
    <img src={HW} alt='La maison jungle' />

    </>,
  document.getElementById('root')
);