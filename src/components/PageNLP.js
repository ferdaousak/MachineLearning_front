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
} from "antd";
import NLPService from "../services/NLPService";
import JSONView from "react-json-view";

const { Title, Text } = Typography;
const { TextArea } = Input;
const { Option } = Select;

class PageNLP extends React.Component {
  formRef = React.createRef();

  onMethodChange = (method) => {
    this.setState({ method: method });
  };
  onFinish = () => {
    NLPService.processText(this.state.value, this.state.method).then(
      (response) => {
        this.setState({ result: response.data });
      }
    );

    console.log(this.state.result);
  };

  onReset = () => {
    this.formRef.current.resetFields();
  };

  state = {
    value: "",
    method: "",
    result: "",
  };

  onChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state.value;
    const style =
      this.state.method !== "bag_of_words"
        ? { visibility: "hidden" }
        : { visibility: "visible" };
    return (
      <>
        <Title>Natural Proccesing Language</Title>
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
                  value={value}
                  onChange={this.onChange}
                  placeholder="Insert Text to process"
                  autoSize={{ minRows: 5, maxRows: 6 }}
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
            Method
          </Divider>
          <Row>
            <Col span={8}>
              <Form.Item name="method" rules={[{ required: true }]}>
                <Select
                  placeholder="Select a NLP Method"
                  style={{ color: "#2BB55C", fontWeight: "bold" }}
                  onChange={this.onMethodChange}
                  bordered={true}
                  allowClear
                >
                  <Option value="tokenization">Tokenization</Option>
                  <Option value="pos_tag">Part-of-Speech Tagging</Option>
                  <Option value="rm_stop_words">Remove Stop Words</Option>
                  <Option value="bag_of_words">Bag of Words</Option>
                  <Option value="lemmatization">Lemmatization</Option>
                  <Option value="stemming">Stemming</Option>
                  <Option value="tfidf">TF-IDF</Option>
                </Select>
              </Form.Item>
            </Col>
            {/* <Col span={6} style={style}>
              <Text type="secondary">
                Please Seperate phrases with <Text code>;</Text>
              </Text>
            </Col> */}
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
        {this.state.result && (
          <Row
            style={{ textAlign: "left", maxHeight: 300, overflow: "scroll" }}
          >
            <Col span={24}>
              <JSONView
                name={false}
                collapseStringsAfterLength="10"
                theme="monokai"
                displayDataTypes={false}
                src={this.state.result}
              ></JSONView>
            </Col>
          </Row>
        )}
      </>
    );
  }
}

export default PageNLP;
