import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
    SUN,
    WINDY,
} from './../../../constants/weather';
import './styles.css';

const icons = {
    [SUN]:'day-sunny',
    [WINDY]:'windy',
};

const getWeatherIcon = weatherstate => {
    const icon = icons[weatherstate]
    
    const sizeIcon = "4x"
    
    if (icon)
        return <WeatherIcons className="wicon" name={icon} size={sizeIcon} />
    
}


const WeatherTemperature = ({temperature, weatherstate}) => {
    return(
        <div className="weatherTemperature">
                {
                    getWeatherIcon(weatherstate)
                }
                <span className="temperature"> {`${temperature}`}</span>  
                <span className="temperatureType">{ ` C♦ `} </span>
        </div>
        );
}


WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherstate: PropTypes.string.isRequired,
};

export default WeatherTemperature;