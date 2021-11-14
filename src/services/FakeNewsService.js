import axios from "axios";

const NLP_REST_API_URL = "http://localhost:8000/predict/fakenews";

class FakeNewsService {
  detectFakeNews(text) {
    return axios.post(NLP_REST_API_URL, { article: text });
  }
}

export default new FakeNewsService();
