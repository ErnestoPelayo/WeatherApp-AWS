import React from 'react'
import WeatherLocation from './WeatherLocation'

const listCountry = cities => {
    return  cities.map(city => <WeatherLocation city= {city} />)
}

const LocationList = ({ cities }) => {
    return (
            <div> 
                {listCountry(cities)}
            </div>    
    )
}

export default LocationList;
