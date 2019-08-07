import React,{Component} from 'react';
import './weather.css';
class Weather extends Component{
    render()
    {
        return (
           <div className='Weather'>
               <div>

                   {this.props.city && this.props.country &&
                   <h1>Weather detail of {this.props.city} in {this.props.country}</h1>
                   }
        
                
               </div>
            {this.props.temperature &&   
            <p>
            Temperature={this.props.temperature}</p> }
           
            {this.props.city && this.props.country && <p>
            Location={this.props.city} ,{this.props.country}</p>}
            
            {this.props.description && <p>
            Condition={this.props.description}</p>}
            {this.props.error &&
            <p>{this.props.error}</p>}
           
            {this.props.humidity && <p>
            humidity={this.props.humidity}</p>}
           
            </div>
        );
    }
}

export default Weather;