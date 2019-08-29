import React, { Component } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import PropTypes from 'prop-types'
import Location from './Location'
import WeatherData from './WeatherData'
import getUrlByCity from './../../services/getUrlByCity'
import transformWeather from './../../services/transformWeather'
import './styles.css'


class WeatherLocation extends Component {
    
    constructor(props){
        super(props);
        const {city} = this.props
        this.state = {
            city,
            data : null,
        };
    }
    
    componentDidMount(){
        this.handleUpdateClick();
    }
    
    handleUpdateClick = () => {
        const api_weather = getUrlByCity(this.state.city)
        fetch(api_weather).then( resolve => {
            return resolve.json();
        } ).then(data => {
            const newWeather = transformWeather(data);
            this.setState({
                data:newWeather 
            });
        });
        
    }
        render(){
            const { city , data } = this.state
            return(
                <div className="weatherLocationCont">
                
                    <Location city={city} />
                    { data ?
                     <WeatherData data={data} /> : <CircularProgress color="secondary" size = {70} />
                    }
                </div>       
            );
        }
}

WeatherLocation.propTypes = {
    city:PropTypes.string.isRequired,
}

export default WeatherLocation;