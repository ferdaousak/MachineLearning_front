import React from 'react';
import { Switch, Route, BrowserRouter, Redirect,NavLink } from "react-router-dom";
import PageNLP from "../components/PageNLP";
import PageDetectEmotion from "../components/PageDetectEmotion";
import PageDetectFakeNews from "../components/PageDetectFakeNews";
import PageFakeNewsHistory from "../components/PageFakeNewsHistory";
import { Layout, Menu,Typography } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UploadOutlined,
  SmileOutlined,
  TranslationOutlined,
  TableOutlined,
  FileDoneOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content, Footer } = Layout;
const { Title } = Typography;
class PageSider extends React.Component{


    state = {
        collapsed: false,
      };
    
      toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };

    render() {
        return (
            <Layout style={{minHeight: '100vh',height: 'auto'}}>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed} style={{position:"sticky",top:"0px",left:"0px"}}>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['2']} style={{fontSize:"17px",top:"0px", position: "sticky"}}>
                        <Menu.Item key="1" icon={<TranslationOutlined style={{fontSize:"20px"}}/>}>
                            <NavLink to="/NLP">NLP</NavLink>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<TableOutlined style={{fontSize:"20px"}} />}>
                            <NavLink to="/Fake-news-history">Fake News</NavLink>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<SmileOutlined style={{fontSize:"20px"}} />}>
                            <NavLink to="/Detect-Emotion">Detect Emotion</NavLink>
                        </Menu.Item>
                        <Menu.Item key="4" icon={<FileDoneOutlined style={{fontSize:"20px"}}/>}>
                            <NavLink to="/Detect-Fake-news">Detect Fake Text</NavLink>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                <Header className="site-layout-header-background" style={{ zIndex:"20",top:"0px", position: "sticky",padding:"2px 0" , display:"flex", justifyContent:"flex-start"}}>
                    {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: 'trigger',
                    onClick: this.toggle,
                    style: {marginTop:"1.2%",fontSize:"30px",color:"#fff"},
                    })}
                    <Title style={{display:"inline",marginLeft:"25%",color:"#fffb"}}>Fake News & Text Processing&#8482;</Title>
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: 280,
                    }}
                >
                    <Switch>
                        <Route path="/" exact>
                            <Redirect to="/Fake-news-history" />
                        </Route>
                        <Route path="/Fake-news-history">
                            <PageFakeNewsHistory />
                        </Route>
                        <Route path="/NLP">
                            <PageNLP />
                        </Route>
                        <Route path="/Detect-Fake-news">
                            <PageDetectFakeNews />
                        </Route>
                        <Route path="/Detect-Emotion">
                            <PageDetectEmotion />
                        </Route>
                    </Switch>
                </Content>
                <Footer style={{bottom:"0px", textAlign: "center" }}>
                    Fake-news-detection & Text-processing Made By B.Aymane | A.Ferdaous © 2021
                </Footer>
                </Layout>
            </Layout>
        );
    }

}


export default PageSider;