import React, {useState} from "react";
import { Typography, Button, Row, Col, Card, Table,Spin } from "antd";
import { useQuery } from "@apollo/react-hooks";
import { GET_ARTICLES } from "../services/queries";
import { LoadingOutlined } from '@ant-design/icons';
import ScrapService from "../services/scrapingService"

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const columns = [
  {
    title: "Link",
    dataIndex: "link",
    key: "link",
    render: (link) => (
      <a href={`${link}`} style={{ color: "#008dff" }}>
        {link ? (link.length < 40 ? link : link.substr(0, 40) + "...") : ""}
      </a>
    ),
  },
  {
    title: "Text",
    dataIndex: "text",
    key: "text"
  },
  {
    title: "Source",
    dataIndex: "source",
    key: "source"
  },
  {
    title: "Scraping date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Prediction",
    dataIndex: "prediction",
    key: "prediction",
  },
];

export default function PageFakeNewsHistory()
{
  const [isScraping, setScraping] = useState(false);

  const { loading, error, data } = useQuery(GET_ARTICLES);

  const scraping = () =>
  {
    console.log("scraping begin ");
    setScraping(true);
    ScrapService.Scrap_Predict(10).then(response =>{
      
      setScraping(false);
      console.log("scraping end ")

      console.log(response.data.data)
    })


  }

  const getLastUpdate = () => {
    console.log(
      "🚀 ~ file: PageFakeNewsHistory.js ~ line 38 ~ getLastUpdate ~ data",
      data
    );
    if (data && data.articles && data.articles.length > 0) {
      return new Date(
        Math.max(...data.articles.map((el) => new Date(el.date).getTime()))
      ).toString();
    }
  };

  React.useEffect(() => {}, [data]);

  return (
    <Card>
      <Row style={{ justifyContent: "space-between" }}>
        <Col span={3}>
        {isScraping ?
          (<Spin style={{marginTop:"10px"}} indicator={antIcon} />)
          :
          (<Button onClick={()=>scraping()} disabled={isScraping}>scrap</Button>)
        }
          
          
        </Col>
        <Col span={6} offset={6}>
          <Typography.Title style={{ fontSize: 16 }}>
            History of predicted articles
          </Typography.Title>
        </Col>
        <Col span={6} offset={3}>
          <Typography.Text style={{ color: "gray" }}>
            Last update was at {getLastUpdate()}
          </Typography.Text>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          {loading? (
            <Spin style={{marginTop:"10px"}} indicator={antIcon} />
          ) : error ? (
            error
          ) : (
            <Table columns={columns} dataSource={data ? data.articles : []} />
          )}
        </Col>
      </Row>
    </Card>
  );
}
