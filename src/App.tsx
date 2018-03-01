import * as React from 'react';
import './App.css';
// import 'antd/dist/antd.css';
// babel-plugin-import 会帮助你加载 JS 和 CSS
// import { Row, Col, Button } from 'antd';
import Button from 'antd/lib/button';
import Col from 'antd/lib/col';
import Row from 'antd/lib/row';
import * as $ from 'jquery';

// const logo = require('./logo.svg');

class App extends React.Component {
  constructor(props: {}) {
    super(props);
  }
  // tslint:disable-next-line:no-any
  TitleMouseDown(e: React.MouseEvent<Button>) {
    let iDiffX: number = e.pageX - ($(e.currentTarget).offset() as JQuery.Coordinates).left;
    var iDiffY: number = e.pageY - ($(e.currentTarget).offset() as JQuery.Coordinates).top;

    let tmpScrollTop: number | undefined = $(window.document).scrollTop();
    let scrollTop: number = tmpScrollTop ? tmpScrollTop : 0;
    // tslint:disable-next-line:no-shadowed-variable typedef
    $(document).mousemove(function (e) {
      $('#customPopup').css({ 'left': (e.pageX - iDiffX), 'top': (e.pageY - scrollTop - iDiffY) });
    });
  }
  TitleMouseUP(e: React.FormEvent<HTMLElement>) {
    $(document).unbind('mousemove');
  }
  OpenConfig() {
    window.open('https://daziyuan.github.io/tampermonkey-react/config.html');
  }
  render() {
    return (
      <div>
        <Row>
          <Col span={24}>
            <Button onMouseUp={this.TitleMouseUP} onMouseDown={this.TitleMouseDown} style={{ width: '100%' }} type="primary">
              Title</Button>
          </Col>
        </Row>
        <Row >
          <Col span={24}>
            <Button onClick={this.OpenConfig} type="primary">ConfigPage</Button>
          </Col>
        </Row>
      </div >
    );
  }
}

export default App;
