import Country from "../Views/country/Country"
import CountryList from '../Views/CountryList'


function View({ countries, handleShow }) {
    if (countries.length > 10) {
        return <p>Too many matches define another filter</p>
    }
    if (countries.length === 0) {
        return <p>there were no matches, try a different search term</p>
    }
    if (countries.length === 1) {
        let country = countries[0]
        return (
            <Country {...country} handleShow={handleShow} />)
    }
    return <CountryList countries={countries} handleShow={handleShow} />
}

export default View