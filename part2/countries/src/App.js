import './App.css';
import { useEffect, useState } from "react";
import axios from "axios";
import CountryList from './components/CountryList';
import Country from './components/Country'

const API_KEY = process.env.REACT_APP_API_KEY

function isObject(suspectedObject) {
    if (typeof suspectedObject !== 'object' && typeof suspectedObject !== null) {
        return true
    }
}

function parseResponse(country) {
    let result = {
        country_name: country?.name?.common,
        capital_name: Array.isArray(country?.capital) && country.capital.length >= 1 ? country.capital[0] : null,
        area: country?.area,
        languages: country?.languages && Object.values(country.languages),
        coatOfArms: country.coatOfArms.svg || country.coatOfArms.png || null
    }
    return result
}


function App() {
    const [filter, setFilter] = useState('')
    const [countries, setCountries] = useState([])
    //console.log(countries[0])
    const filteredCountries = countries.filter(country => {
        const substring = filter.trim().toLowerCase()
        const countryName = country.name.common.toLowerCase()

        return countryName.includes(substring)
    })

    function handleShow(name) {
        setFilter(name)
    }


    useEffect(() => {
        axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
            .then(res => {
                setCountries(res.data)
                let countries = res.data

                countries = countries.map(country => {
                    return parseResponse(country)
                })

                console.log(countries)
            })
            .catch(err => {
                console.error('there was an error fetching countries from api: ', err)
            })
    }, [])

    function handleFormChange(e) {
        setFilter(e.target.value)
    }

    return (
        <div className="App">
            <label htmlFor='search' >
                find countries:{' '}
            </label>
            <input name='search' onChange={handleFormChange} value={filter} />
            {
                (filteredCountries.length > 10 && <p>Too many matches define another filter</p>)
                ||
                (filteredCountries.length === 0 && <p>there were no matches, try a different search term</p>)
                ||
                (filteredCountries.length === 1 && <Country country={filteredCountries[0]} handleShow={handleShow} />)
                ||
                <CountryList countries={filteredCountries} handleShow={handleShow} />
            }

        </div>
    );
}

export default App;
