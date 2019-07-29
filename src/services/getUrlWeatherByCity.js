import { api_endpoint,api_key,api_unit } from '../constants/api_url';

const getUrlWeatherByCity = city => {
    return `${api_endpoint}?q=${city}&appid=${api_key}&units=${api_unit}`;
};

export default getUrlWeatherByCity;

