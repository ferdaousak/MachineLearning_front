import "../App.css";

import React from "react";
import { Menu } from "antd";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

const style = {
  color: "#2BB55C",
};

const menuStyle = {
  marginTop: "2.3%",
  paddingLeft: "5%",
  marginLeft: "auto",
  marginRight: "auto",
  boxShadow: "1px 2px #888888",
  borderRadius: "20px",
  width: "75%",
  BackgroundColor: "#2BB55C",
  color: "#2BB55C",
};

class PageHeader extends React.Component {
  state = {
    current: "/Fake-news-history",
  };

  handleClick = (e) => {
    this.setState({ current: e.key });
  };

  render() {
    console.log("Current", this.state.current);
    return (
      <Menu
        theme="light"
        style={menuStyle}
        mode="vertical"
        selectedKeys={[this.state.current]}
        onClick={this.handleClick}
      >
        <Menu.Item key="/Fake-news-history">
          <NavLink activeStyle={style} to="/Fake-news-history">
            Fake News
          </NavLink>
        </Menu.Item>
        <Menu.Item key="/Fake-news">
          <NavLink activeStyle={style} to="/Fake-news">
            Detect fake news
          </NavLink>
        </Menu.Item>
        <Menu.Item key="/NLP">
          <NavLink activeStyle={style} to="/NLP">
            NLP
          </NavLink>
        </Menu.Item>
        <Menu.Item key="/Detect-Emotion">
          <NavLink activeStyle={style} to="/Detect-Emotion">
            Detect Emotion
          </NavLink>
        </Menu.Item>
      </Menu>
    );
  }
}

export default PageHeader;
