import Weather from './Weather';

function Country({ countryName, capitalName, capitalLat, capitalLon, area, languages, coatOfArms }) {
    return (
        <>
            <h2>{countryName}</h2>
            <table>
                <tbody>
                    <tr>
                        <td >Capital:</td><td>{capitalName}</td>
                    </tr>
                    <tr>
                        <td>Area:</td><td>{area}</td>
                    </tr>
                </tbody>
            </table>
            <h3>languages</h3>
            <ul>
                {languages
                    .map(language =>
                        <li key={language}>{language}</li>
                    )
                }
            </ul>
            <img
                style={{ marginTop: '20px' }}
                src={coatOfArms}
                alt="" width='200px' />
            <Weather city={capitalName} lat={capitalLat} lon={capitalLon} />
        </>
    )
}

export default Country
