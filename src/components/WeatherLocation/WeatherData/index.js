import React from 'react'
import WeatherTemperature from './WeatherTemperature'
import WeatherExtraInfo from './WeatherExtraInfo'
import './styles.css'
import Proptypes from 'prop-types'

const WeatherData = ({data}) => {
    return (
        <div className="weatherDataCont"> 
            <WeatherTemperature 
                    temperature={data.temperature} 
                    weatherstate={data.weatherstate}
            />
            <WeatherExtraInfo humidity={data.humidity} wind={data.wind} />
        </div>
        
        );
}

WeatherData.propTypes = {
        data : Proptypes.shape(
                {
                    temperature : Proptypes.number.isRequired,
                    weatherstate : Proptypes.string.isRequired,
                    humidity : Proptypes.number.isRequired,
                    wind : Proptypes.string.isRequired
                }
        )
}

export default WeatherData