import axios from "axios";
import { v1 as uuid } from 'uuid';

function parseResponse(country) {
    let result = {
        id: uuid(),
        countryName: country?.name?.common,
        capitalName: Array.isArray(country?.capital) && country.capital.length >= 1 ? country.capital[0] : null,
        capitalLat: country?.capitalInfo?.latlng ? country?.capitalInfo?.latlng[0] : null,
        capitalLon: country?.capitalInfo?.latlng ? country?.capitalInfo?.latlng[1] : null,
        area: country?.area,
        languages: country?.languages ? Object.values(country?.languages) : null,
        coatOfArms: country.coatOfArms.svg || country.coatOfArms.png || null
    }
    return result
}

function fetchCountries() {
    return axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
        .then(res => {
            let countries = res.data
            countries = countries.map(country => {
                return parseResponse(country)
            })

            return countries
        })
}

export default fetchCountries