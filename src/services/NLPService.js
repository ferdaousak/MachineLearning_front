import axios from 'axios';

const NLP_REST_API_URL = 'http://localhost:8000/process_text';

class NLPService 
{
    processText(text, method)
    {
        console.log("text : " + text + " method : " + method);
        return axios.post(NLP_REST_API_URL, {text: text, method: method});
    }
}

export default new NLPService();
