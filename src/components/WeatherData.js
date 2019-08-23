import React from 'react'
import WeatherTempeture from './WeatherTempeture'
import WeatherExtraInfo from './WeatherExtraInfo'

const WeatherData = () => {
    return (
        <div> 
            <WeatherTempeture />
            <WeatherExtraInfo humidity={'10'} wind='10 m/s' />
        </div>
        
        );
}

export default WeatherData