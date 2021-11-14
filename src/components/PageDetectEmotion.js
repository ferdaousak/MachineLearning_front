import React from "react";
import {
  Typography,
  Form,
  Input,
  Button,
  Select,
  Divider,
  Row,
  Col,
  Alert,
} from "antd";
import EmotionService from "../services/EmotionService";

const { Title, Text } = Typography;
const { TextArea } = Input;
const { Option } = Select;

class PageDetectEmotion extends React.Component {
  formRef = React.createRef();

  state = {
    emotion: "",
    text: "",
  };
  onFinish = () => {
    EmotionService.detectemotion(this.state.text).then((response) => {
      this.setState({ emotion: response.data.data });
    });
    console.log(this.state.emotion);
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
        <Title>Text Emotion Detection</Title>
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
                  placeholder="Insert Text to process"
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
            Emotion
          </Divider>
          <Row style={{ textAlign: "left" }}>
            <Col
              style={
                this.state.emotion
                  ? { visibility: "visible" }
                  : { visibility: "hidden" }
              }
              span={8}
            >
              {this.state.emotion == "positive" && (
                <Alert
                  message="Positive"
                  type="success"
                  description="a positive comment"
                  showIcon
                />
              )}
              {this.state.emotion == "neutral" && (
                <Alert
                  message="Neutral"
                  type="warning"
                  description="a neutral comment"
                  showIcon
                />
              )}
              {this.state.emotion == "negative" && (
                <Alert
                  message="Negative"
                  type="error"
                  description="a negative comment"
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

export default PageDetectEmotion;
