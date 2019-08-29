import React, {Component} from 'react';
import LocationList from './components/LocationList'

const cities = [
     'Mexicali,mx',
     'Madrid,es',
     'Riverside,us',
     'Paris,fr',
     'Berlin,De',
     'Michigan,us',
]

class App extends Component {
  render(){
   return (
    <div>
          <LocationList cities = { cities }/>
    </div>
  ); 
  }
}

export default App;
