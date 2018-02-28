// ==UserScript==
// @name ReactTest
// @description 集成react
// @version 1.0
// @author DaZiYuan
// @license MIT
// @include *
// @run-at document-end
// ==/UserScript==

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import Config from './Config';
import './index.css';
import * as $ from 'jquery';

function appendPopup(): void {
  $('body').append('<div id="customPopup"></div>');
}

let result = window.document.location.toString().indexOf('daziyuan.github.io/tampermonkey-react/config.html');
if (result !== -1) {
  let root = document.getElementById('configRoot') as HTMLElement;
  if (!root) {
    $('body').append('<div id="configRoot"></div>');
  }

  // 配置页面
  ReactDOM.render(
    <Config />,
    document.getElementById('configRoot') as HTMLElement
  );
} else {
  appendPopup();
  ReactDOM.render(
    <App />,
    document.getElementById('customPopup') as HTMLElement
  );
}