import React,{Component} from 'react';
import {
    DatePicker,
    Button,
    // Icon,
    // Layout,
    // Menu,
    // Breadcrumb,
    Card,
    Drawer,
    Radio,
    BackTop,
    Carousel
} from "antd";

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './static/css/index.css';


const RadioGroup = Radio.Group;

// const { Header, Content, Footer, Sider } = Layout;
const { Meta } = Card;

class App extends Component{
    state = { visible: false, placement: 'left' };
    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    onChange = e => {
        this.setState({
            placement: e.target.value,
        });
    };

    render() {
      return (
          <div className={'App'}>
              <div>
                  <BackTop>
                      <div className="ant-back-top-inner">UP</div>
                  </BackTop>
                  Scroll down to see the bottom-right
                  <strong style={{ color: '#1088e9' }}> blue </strong>
                  button.
              </div>
              <DatePicker></DatePicker>


              <br/>
              <Button type="primary">Primary</Button>
              <Button>Default</Button>
              <Button type="dashed">Dashed</Button>
              <Button type="danger">Danger</Button>
              <Button type="link">Link</Button>


              <br/>
              <Card title="Default size card" extra={<a href="www.baidu.com">More</a>} style={{ width: 300 }}>
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
              </Card>
              <Card size="small" title="Small size card" extra={<a href="www.baidu.com">More</a>} style={{ width: 300 }}>
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
              </Card>
              <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
                  <Meta title="Europe Street beat" description="www.instagram.com" />
              </Card>


              <br/>
              <RadioGroup
                  style={{ marginRight: 8 }}
                  defaultValue={this.state.placement}
                  onChange={this.onChange}
              >
                  <Radio value="top">top</Radio>
                  <Radio value="right">right</Radio>
                  <Radio value="bottom">bottom</Radio>
                  <Radio value="left">left</Radio>
              </RadioGroup>
              <Button type="primary" onClick={this.showDrawer}>
                  Open
              </Button>
              <Drawer
                  title="Basic Drawer"
                  placement={this.state.placement}
                  closable={false}
                  onClose={this.onClose}
                  visible={this.state.visible}
              >
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
              </Drawer>
              <br/>
              <hr/>
              <br/>
              <Carousel autoplay>
                  <div>
                      <h3>1</h3>
                  </div>
                  <div>
                      <h3>2</h3>
                  </div>
                  <div>
                      <h3>3</h3>
                  </div>
                  <div>
                      <h3>4</h3>
                  </div>
              </Carousel>
          </div>
      )
  }
}

export default App;
