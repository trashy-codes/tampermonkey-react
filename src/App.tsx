import * as React from 'react';
import './App.css';
import 'antd/dist/antd.css';
// babel-plugin-import 会帮助你加载 JS 和 CSS
import { DatePicker } from 'antd';

// const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <DatePicker />
    );
  }
}

export default App;
