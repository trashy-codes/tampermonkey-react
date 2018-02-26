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
  $('body').append('<div id="customPopup"><button id="btnDrag">Drag</button><textarea id="logger" /></div>');
  // tslint:disable-next-line:max-line-length
  // GM_addStyle('#customPopup{ position:fixed; z-index:99999; top:0;top:50%; left:75%; width:500px; height:500px; background:#8a9bca;}');
  // GM_addStyle('#btnDrag{  width:100%; height:20px; background:#8a9bca; cursor:move;}');
  // GM_addStyle('#logger{  width:98.8%; height:80%; }');

  // tslint:disable-next-line:typedef
  $('#btnDrag').mousedown(function (e) {
    let iDiffX: number = e.pageX - ($(this).offset() as JQuery.Coordinates).left;
    var iDiffY: number = e.pageY - ($(this).offset() as JQuery.Coordinates).top;

    let tmpScrollTop: number | undefined = $(window.document).scrollTop();
    let scrollTop: number = tmpScrollTop ? tmpScrollTop : 0;
    // tslint:disable-next-line:no-shadowed-variable typedef
    $(document).mousemove(function (e) {
      $('#customPopup').css({ 'left': (e.pageX - iDiffX), 'top': (e.pageY - scrollTop - iDiffY) });
    });
  });
  // tslint:disable-next-line:typedef
  $('#customPopup').mouseup(function () {
    $(document).unbind('mousemove');
  });
}

(function () {
  'use strict';
  appendPopup();
})();

ReactDOM.render(
  < App />,
  document.getElementById('customPopup') as HTMLElement
);