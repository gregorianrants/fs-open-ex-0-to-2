import axios from "axios";
import { useEffect, useState } from "react";
const API_KEY = process.env.REACT_APP_API_KEY

function Weather({ capital }) {
    const { name, lat, lon } = capital
    const [weather, setWeather] = useState(null)
    console.log(weather)

    useEffect(() => {
        //can also give an exclude param to exclude certain parts of the response
        axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
            .then(res => {
                console.log(res.data)
                const { temp, wind_speed, weather } = res.data.current
                const { icon } = weather[0]
                setWeather({
                    temp: String(temp) + ' Celcius',
                    wind_speed: String(wind_speed) + 'm/s',
                    icon_url: `https://openweathermap.org/img/wn/${icon}@2x.png`
                })
            })
            .then(console.log)
    }, [])
    if (!weather) return null

    return (
        <div>
            <h2>
                Weather in {name}
            </h2>
            <p>Temperature {weather.temp}</p>
            <img src={weather.icon_url} alt="" />
            <p>Wind speed {weather.wind_speed}</p>
        </div>
    )
}

export default Weather
