import React from 'react';
import { render } from 'react-dom';
import App from './App';
import 'bootstrap/scss/bootstrap.scss';
import '@styles/index.scss';

const rootElement = document.getElementById('root');

render(<App />, rootElement);
