import * as React from 'react';
// import { Row, Col, Button, Input, message } from 'antd';

import  Row  from 'antd/lib/row';
import  Col  from 'antd/lib/col';
import  Button  from 'antd/lib/button';
import  Input  from 'antd/lib/input';
import  message  from 'antd/lib/message';

interface State {
    configData: string;
}

class Config extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            configData: this.ReadConfig()
        };
        this.HandleConfigChange = this.HandleConfigChange.bind(this);
        this.SaveConfig = this.SaveConfig.bind(this);
    }
    HandleConfigChange(e: React.FormEvent<HTMLInputElement>) {
        this.setState({ configData: e.currentTarget.value } as State);
    }
    ReadConfig(): string {
        var result = GM_getValue('configData');
        return result;
    }
    SaveConfig() {
        GM_setValue('configData', this.state.configData);
        message.success('保存成功', 0.3);
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
                    <Col span={18}>
                        <Input onChange={this.HandleConfigChange} value={this.state.configData} placeholder="配置" />
                    </Col>
                    <Col offset={2} span={4}>
                        <Button onClick={this.SaveConfig} >保存</Button>
                    </Col>
                </Row>
            </div >
        );
    }
}

export default Config;
