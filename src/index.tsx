// ==UserScript==
// @name ReactTest
// @description 继承react
// @version 1.0
// @author dhswg20077
// @license MIT
// @include *
// @icon http://pics.smotri.com/
// @run-at document-end
// @grant none
// @require https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.20.19/system.js
// @require https://unpkg.com/react@16/umd/react.production.min.js
// @require https://unpkg.com/react-dom@16/umd/react-dom.production.min.js
// ==/UserScript==

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
