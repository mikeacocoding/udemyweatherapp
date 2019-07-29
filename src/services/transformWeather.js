

const transformWeather = wdata => {
    const { humidity, temp} = wdata.main;
    const { speed } = wdata.wind;
    const icon = wdata.weather[0].icon;

    const data = {
        humidity,
        temperature : temp,
        wind: `${speed} m/s`,
        icon
    };

    return data;
};


export default transformWeather;