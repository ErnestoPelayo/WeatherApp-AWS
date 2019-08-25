import React, { Component } from 'react'
import Location from './Location'
import WeatherData from './WeatherData'
import './styles.css'
import {
    SUN,
} from './../../constants/weather'

const data = {
    humidity: 10,
    temperature: 20,
    weatherstate: SUN,
    wind : "10 m/s",
};

const location = 'Mexicali,Mx';
const api_key = '7f05b9413f850e901cd9f54018053c1d';
const url_base = 'https://api.openweathermap.org/data/2.5/weather';
const api_weather = `${url_base}?q=${location}&appid=${api_key}`;


class WeatherLocation extends Component {
    
    constructor(){
        super();
        this.state = {
            city : "Mexicali",
            data : data,
        };
    }
    
    getWeatherState = weatherstate => {
        return SUN;
    }
    
    getData = weather_data => {
        const { humidity , temp } = weather_data.main;
        const { speed } = weather_data.wind;
        const weatherstate = this.getWeatherState(weather_data);
        
        const data = {
            humidity,
            temperature:temp,
            weatherstate,
            wind: `${speed} m/s`
        }
        
        return data;
    }
    
    
    handleUpdateClick = () => {
        fetch(api_weather).then( resolve => {
            return resolve.json();
        } ).then(data => {
            const newWeather = this.getData(data);
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
                    <WeatherData data={data} />
                    <button onClick={this.handleUpdateClick}> Actualizar </button>
                </div>       
            );
        }
}


export default WeatherLocation;