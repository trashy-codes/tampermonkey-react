// ==UserScript==
// @name ReactTest
// @description 集成react
// @version 1.0
// @author dhswg20077
// @license MIT
// @include *
// @icon http://pics.smotri.com/
// @run-at document-end
// @grant GM_addStyle
// @require https://unpkg.com/react@16/umd/react.production.min.js
// @require https://unpkg.com/react-dom@16/umd/react-dom.production.min.js
// ==/UserScript==

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as $ from 'jquery';

function appendPopup(): void {
  $('body').append('<div id="customPopup"></div>');
  // GM_addStyle('#customPopup{ position:fixed; z-index:99999; top:0;top:50%; left:75%; width:500px; height:500px; background:#8a9bca;}');
  // GM_addStyle('#btnDrag{  width:100%; height:20px; background:#8a9bca; cursor:move;}');
  // GM_addStyle('#logger{  width:98.8%; height:80%; }');
}

(function () {
  'use strict';
  appendPopup();
})();

ReactDOM.render(
  < App />,
  document.getElementById('customPopup') as HTMLElement
);