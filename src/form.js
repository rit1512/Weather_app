import React,{Component} from 'react';
import "./form.css"
class Form extends Component{
    render()
    {
        return (
            <div className="Form">
           <form onSubmit={this.props.getWeather}>
 <select name="country" class="countries order-alpha" id="countryId">
    <option value="">Select Country</option>
   </select>
   <br/>
    <select name="state" class="states order-alpha" id="stateId">
    <option value="">Select State</option>
    </select>
    <br/>
    <select name="city" class="cities order-alpha" id="cityId">
    <option value="">Select City</option>
    </select>
    <br/>
     <button>View Weather</button>
    
           </form>
           </div>
        );
    }
}

export default Form;