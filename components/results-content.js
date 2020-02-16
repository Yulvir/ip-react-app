import React from 'react'
import {useSelector} from "react-redux";


export default  () => {
  const results = useSelector(state => state.results);

    const locationData = {
            longitude: results.match.location.longitude,
            latitude: results.match.location.latitude,
            timeZone: results.match.location.time_zone,
            cityName: results.match.city.names.en,
            continentName: results.match.continent.names.en,
            countryName:  results.match.country.names.en,
            postalCode:  results.match.postal.code,
        };

    console.log("RENDERING MAP");
    return (

[
            <li className="list-group-item d-flex justify-content-between align-items-center">
                Latitude
                <h4><span className="badge badge-primary badge-pill">{locationData.latitude}</span></h4>
            </li>,
            <li className="list-group-item d-flex justify-content-between align-items-center">
                Longitude
                <h4><span className="badge badge-primary badge-pill">{locationData.longitude}</span></h4>
            </li>,
            <li className="list-group-item d-flex justify-content-between align-items-center">
                City
                <h4><span className="badge badge-primary badge-pill ">{locationData.cityName}</span></h4>
            </li>,

            <li className="list-group-item d-flex justify-content-between align-items-center">
                Continent
                <h4><span className="badge badge-primary badge-pill">{locationData.continentName}</span></h4>
            </li>,

            <li className="list-group-item d-flex justify-content-between align-items-center">
                Country
                <h4><span className="badge badge-primary badge-pill">{locationData.countryName}</span></h4>
            </li>,

            <li className="list-group-item d-flex justify-content-between align-items-center">
                Postal Code
                <h4><span className="badge badge-primary badge-pill">{locationData.postalCode}</span></h4>
            </li>,

            <li className="list-group-item d-flex justify-content-between align-items-center">
                Time Zone
                <h4><span className="badge badge-primary badge-pill">{locationData.timeZone}</span></h4>
            </li>
        ]
    )
}
