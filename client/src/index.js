import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBars,
  faTimes,
  faChevronDown,
  faLightbulb,
} from '@fortawesome/free-solid-svg-icons';
import App from './App';
import './index.css';

library.add(faBars, faTimes, faChevronDown, faLightbulb);

ReactDOM.render(<App />, document.getElementById('root'));
