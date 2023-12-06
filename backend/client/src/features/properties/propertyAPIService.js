import axios from 'axios';


// get properties
const getProperties = async () => {
    const response = await axios.get("http://localhost:8000/api/v1/properties/all/", { timeout: 5000 })
    return response.data
}

const getProperty = async (slug) => {
    const response = await axios.get(`http://localhost:8000/api/v1/properties/details/${slug}/`, { timeout: 5000 });
    return response.data;
  };

const propertyAPIService = {getProperties, getProperty}

export default propertyAPIService