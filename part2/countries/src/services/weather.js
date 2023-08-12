import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY


function fetchWeather({ lat, lon }) {
    //can also give an exclude param to exclude certain parts of the response


    let result = axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
        .then(res => {
            const { temp, wind_speed, weather } = res.data.current
            const { icon } = weather[0]

            return (
                {
                    temp: String(temp) + ' Celcius',
                    wind_speed: String(wind_speed) + 'm/s',
                    icon_url: `https://openweathermap.org/img/wn/${icon}@2x.png`
                })


        })

    return result
}

export default fetchWeather