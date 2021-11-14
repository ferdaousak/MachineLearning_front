import "./App.css";
import PageHeader from "./components/PageHeader";
import PageNLP from "./components/PageNLP";
import PageDetectEmotion from "./components/PageDetectEmotion";
import PageDetectFakeNews from "./components/PageDetectFakeNews";
import { Layout } from "antd";
import { ApolloProvider } from "@apollo/react-hooks";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import PageFakeNewsHistory from "./components/PageFakeNewsHistory";
import { client } from "./services/graphql.service";
import PageSider from "./components/NewPageHeader";

const { Header, Content, Footer,Sider } = Layout;

function App() {
  return (
    <ApolloProvider client={client}>
      <PageSider/>
    </ApolloProvider>
  );
}

export default App;