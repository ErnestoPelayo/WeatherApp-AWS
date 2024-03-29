import {
    SUN,
    CLOUD,
    THUNDER,
    DRIZZLE,
    RAIN,
    SNOW,
} from './../constants/weather'


const getWeatherState = weather => {
        const { id } = weather;
        
        if( id < 300){
            return THUNDER
        } else if (id < 400){
            return  DRIZZLE
        } else if ( id < 600){
            return RAIN
        } else if( id < 700 ){
            return SNOW
        }else if (id === 800){
            return SUN
        }else{
            return CLOUD
        }
        
    }
    
const transformWeather = weather_data => {
        const { humidity , temp } = weather_data.main;
        const { speed } = weather_data.wind;
        const weatherstate = getWeatherState(weather_data.weather[0]);
        
        const data = {
            humidity,
            temperature:temp,
            weatherstate,
            wind: `${speed} k/h`
        }
        
        return data;
}

export default transformWeather;