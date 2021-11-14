import axios from 'axios';

const API_URL = 'http://localhost:8000';

class ScrapService
{

    Scrap_Predict(number)
    {
        return axios.post(API_URL+'/scrap_predict', {number:number});
    }
}

export default new ScrapService();