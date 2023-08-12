
import { useEffect, useState } from "react";
import fetchWeather from "../../services/weather";


function Weather({ city, lat, lon }) {
    const [weather, setWeather] = useState(null)
    useEffect(() => {
        fetchWeather({ lat, lon })
            .then(setWeather)
    }, [])
    if (!weather) return null

    return (
        <div>
            <h2>
                Weather in {city}
            </h2>
            <p>Temperature {weather.temp}</p>
            <img src={weather.icon_url} alt="" />
            <p>Wind speed {weather.wind_speed}</p>
        </div>
    )
}

export default Weather
