import Weather from './Weather';

function getCapitalData({ country }) {
    const capitalName = country.capital[0]
    const { capitalInfo } = country
    const [lat, lon] = capitalInfo.latlng

    const capital = {
        name: capitalName,
        lat: lat,
        lon: lon
    }

    return capital
}

function Country({ country }) {
    const capital = getCapitalData({ country })

    console.log(country)
    return (
        <>
            <h2>{country.name.common}</h2>
            <table>
                <tbody>
                    <tr>
                        <td >Capital:</td><td>{capital.name}</td>
                    </tr>
                    <tr>
                        <td>Area:</td><td>{country.area}</td>
                    </tr>
                </tbody>
            </table>
            <h3>languages</h3>
            <ul>
                {Object.values(country.languages)
                    .map(language =>
                        <li key={language}>{language}</li>
                    )
                }
            </ul>
            <img
                style={{ marginTop: '20px' }}
                src={country.coatOfArms.svg}
                alt="" width='200px' />
            <Weather capital={capital} />
        </>
    )
}

export default Country
