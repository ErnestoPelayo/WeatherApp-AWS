import React from 'react'
import WeatherTemperature from './WeatherTemperature'
import WeatherExtraInfo from './WeatherExtraInfo'
import {
    CLOUD,
    CLOUDY,
    RAIN,
    SNOW,
    SUN,
    WINDY,
} from './../constants/weather'

const WeatherData = () => {
    return (
        <div> 
            <WeatherTemperature 
                    temperature={20} 
                    weatherstate={SUN}
            />
            <WeatherExtraInfo humidity={'10'} wind={'10 m/s'} />
        </div>
        
        );
}

export default WeatherData