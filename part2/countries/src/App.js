import './App.css';
import { useEffect, useState } from "react";
import fetchCountries from './services/countries';
import Form from './Layout/Form'
import View from './Layout/View'


function App() {
    const [filter, setFilter] = useState('')
    const [countries, setCountries] = useState([])

    const filteredCountries = countries.filter(country => {
        const substring = filter.trim().toLowerCase()
        const countryName = country.countryName.toLowerCase()

        return countryName.includes(substring)
    })

    function handleShow(name) {
        setFilter(name)
    }


    useEffect(() => {
        fetchCountries()
            .then(setCountries)
            .catch(err => {
                console.error('there was an error fetching countries from api: ', err)
            })
    }, [])

    function handleFormChange(e) {
        setFilter(e.target.value)
    }

    return (
        <div className="App">
            <Form onFormChange={handleFormChange} formValue={filter} />
            <View countries={filteredCountries} handleShow={handleShow} />
        </div>
    );
}

export default App;
