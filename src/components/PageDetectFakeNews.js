import React from "react";
import {
  Typography,
  Form,
  Input,
  Button,
  Divider,
  Row,
  Col,
  Alert,
} from "antd";
import FakeNewsService from "../services/FakeNewsService";

const { Title } = Typography;
const { TextArea } = Input;

class PageDetectFakeNews extends React.Component {
  formRef = React.createRef();

  state = {
    result: "",
    text: "",
  };
  onFinish = () => {
    FakeNewsService.detectFakeNews(this.state.text).then((response) => {
      this.setState({ result: response.data.isFake });
    });
  };

  onReset = () => {
    this.formRef.current.resetFields();
  };

  onChange = ({ target: { value } }) => {
    this.setState({ text: value });
  };
  render() {
    const { value } = this.state.text;
    return (
      <>
        <Title>Fake News Detection</Title>
        <Form ref={this.formRef} name="control-ref" onFinish={this.onFinish}>
          <Divider
            plain
            style={{ width: "75%", color: "#2BB55C", fontSize: "10px" }}
            orientation="left"
            type="horizontal"
          >
            Input
          </Divider>
          <Row>
            <Col span={24}>
              <Form.Item name="text" rules={[{ required: true }]}>
                <TextArea
                  Value={value}
                  onChange={this.onChange}
                  placeholder="Insert text to process"
                  autoSize={{ minRows: 5, maxRows: 13 }}
                  showCount
                />
              </Form.Item>
            </Col>
          </Row>
          <Divider
            plain
            style={{ width: "5%", color: "#2BB55C", fontSize: "10px" }}
            orientation="left"
            type="horizontal"
          >
            Result
          </Divider>
          <Row style={{ textAlign: "left" }}>
            <Col
              style={
                this.state.result
                  ? { visibility: "visible" }
                  : { visibility: "hidden" }
              }
              span={8}
            >
              {this.state.result === "FAKE" ? (
                <Alert
                  message="Fake"
                  type="error"
                  description="Our model thinks this article is fake."
                  showIcon
                />
              ) : (
                <Alert
                  message="Real"
                  type="success"
                  description="Our model thinks this article isn't fake."
                  showIcon
                />
              )}
            </Col>
            <Col span={3} offset={10} style={{ paddingLeft: 10 }}>
              <Button
                htmlType="button"
                onClick={this.onReset}
                style={{ width: "100%" }}
              >
                Reset
              </Button>
            </Col>
            <Col span={3} style={{ paddingLeft: 10 }}>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
              >
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </>
    );
  }
}

export default PageDetectFakeNews;
