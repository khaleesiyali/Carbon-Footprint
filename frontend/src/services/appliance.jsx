import axios from 'axios'

const baseURL = 'http://127.0.0.1:8000/api/appliances';

const getAll = async () => {
    const response = await axios.get(`${baseURL}/?format=json`);
    return response.data;

};

const getById = async (id) => {
    const response = await axios.get(`${baseURL}/${id}/?format=json`);
    return response.data;
}

const newAppliance = async (appliance) => {
    const request = await axios.post(`${baseURL}/`, appliance);
    return request.data;
}

export default {getAll, getById, newAppliance,};