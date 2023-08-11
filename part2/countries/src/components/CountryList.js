function CountryList({ countries, handleShow }) {
    return <ul>
        {countries.map(country =>
            <li key={country.name.official}>{country.name.common}{' '} <button onClick={() => { handleShow(country.name.common) }}>show</button></li>
        )}
    </ul>
}

export default CountryList