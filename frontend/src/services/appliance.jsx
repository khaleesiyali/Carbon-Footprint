import axios from 'axios'

const baseURL = 'http://127.0.0.1:8000/api/appliances';

const getAll = async () => {
    const response = await axios.get(`${baseURL}/?format=json`);
    return response.data;

};
export default {getAll};