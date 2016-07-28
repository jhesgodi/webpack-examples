import '../styles/main.scss';
import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

const $container = document.querySelector('#users-container');

render(<App />, $container);
