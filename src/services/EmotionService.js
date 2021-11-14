import axios from 'axios';

const NLP_REST_API_URL = 'http://localhost:8000/emotion';

class EmotionService
{
    detectemotion(text)
    {
        console.log("text : " + text);
        return axios.post(NLP_REST_API_URL, {text: text});
    }
}

export default new EmotionService();