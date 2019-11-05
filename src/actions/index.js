
import { api_endpoint_forecast, api_key } from '../constants/api_url';
import transformForecast from '../services/transformForeCast';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

const setCity = payload => ({ type : SET_CITY, payload});
const setForeCastData = payload => ({type : SET_FORECAST_DATA,payload});

export const setSelectedCity = payload => {
    return dispatch => {

        const url_forecast = `${api_endpoint_forecast}?q=${payload}&appid=${api_key}`;

        dispatch(setCity(payload));

        //Activar en el estado un indicador de busqueda de datos.
        return fetch(url_forecast).then(
            res => res.json()
        ).then(
            data => {
                const forecastData = transformForecast(data);
                console.log('Imprimiendo el forecast data');
                console.log(forecastData);
                //Modificar el estado con el resultado de la promise
                         
                dispatch(setForeCastData({city: payload, forecastData }));
            }
        );

    };
}