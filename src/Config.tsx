import * as React from 'react';
import { Row, Col, Button } from 'antd';

class Config extends React.Component {
    constructor(props: {}) {
        super(props);
    }
    render() {
        return (
            <div>
                <Row>
                    <Col span={24}>
                        ConfigPage
                    </Col>
                </Row>
                <Row >
                    <Col span={24}>
                        <Button type="primary">NewPage</Button>
                    </Col>
                </Row>
            </div >
        );
    }
}

export default Config;
