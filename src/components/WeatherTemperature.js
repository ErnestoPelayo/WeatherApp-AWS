import React from 'react';
import WeatherIcons from 'react-weathericons';
import {
    CLOUD,
    CLOUDY,
    RAIN,
    SNOW,
    SUN,
    WINDY,
} from './../constants/weather'

const icons = {
    [CLOUD]:'cloud',
    [CLOUDY]:'cloudy',
    [RAIN]:'rain',
    [SNOW]:'snow',
    [SUN]:'day-sunny',
    [WINDY]:'windy',
};

const getWeatherIcon = weatherstate => {
    const icon = icons[weatherstate]
    
    if (icon)
        return <WeatherIcons name={icon} size="2x" />
    else
        return <WeatherIcons name= "day-sunny" size="2x" />
}


const WeatherTemperature = ({temperature, weatherstate}) => {
    return(
        <div>
                {
                    getWeatherIcon(weatherstate)
                }
                <span> {`${temperature} C `} </span>
        </div>
        );
}

export default WeatherTemperature;