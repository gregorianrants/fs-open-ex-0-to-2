function CountryList({ countries, handleShow }) {
    return <ul>
        {countries.map(country =>
            <li key={country.id}>
                {country.countryName}{' '}
                <button onClick={() => { handleShow(country.countryName) }}>show</button></li>
        )}
    </ul>
}

export default CountryList