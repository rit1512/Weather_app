import React,{Component} from 'react';
import Titles from './Titles';
import Form from './form';
import Weather from './weather';
import './App.css';
import axios from 'axios';
const API_KEY="8d49a544a8e17bc5a1a524a09c2a9fb9";

class App extends Component{
  
 state={
   temperature :undefined,
   city:undefined,
   humidity:undefined,
   description:undefined,
   error: undefined
 }
  getWeather = async (e) => {
    e.preventDefault();
    const city=e.target.elements.city.value;
    const country=e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
   
   const data= await api_call.json();
   if(city && country)
   {
    console.log(data);
    this.setState({
      temperature: data.main.temp,
      city : data.name,
      country:data.sys.country,
      humidity:data.main.humidity,
      description:data.weather[0].description,
      error:"",

    });
  }
  else{
    this.setState({
      temperature :undefined,
      city:undefined,
      humidity:undefined,
      description:undefined,
      error: "Please enter the value.",
    })

  }
  }   
  render()
  { 
    return(
    <div className='App'>
     <Titles/>
     <Form getWeather={this.getWeather}/>
     <Weather
     temperature={this.state.temperature}
    city ={this.state.city}
    country={this.state.country}
    description={this.state.description}
    error={this.state.error}
    humidity={this.state.humidity}

     />
    </div>
    );
  }
}
export default App;
