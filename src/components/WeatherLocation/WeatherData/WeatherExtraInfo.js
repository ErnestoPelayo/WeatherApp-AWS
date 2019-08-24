import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const WeatherExtraInfo = ({humidity, wind}) => {
    return (
      <div className="weatherExtraInfoCont"> 
        <span> {` Humedad : ${humidity}`}</span> <br/>
        <span> {` Vientos : ${wind} `}</span>
      </div>  
    );
}

WeatherExtraInfo.propTypes = {
        humidity : PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired
}

export default WeatherExtraInfo;