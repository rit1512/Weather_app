import React ,{Component} from 'react';
import './Titles.css';
import logo from "./logo.png";

class Titles extends Component{
    render(){
        return(
<div className='header'>
    <table>
        <tbody>
            <tr>
                <td>
    <img width="50" src={logo} alt="Logo" width="100" height="50" />
       </td>
 <h1>Weather Finder</h1>
</tr>
</tbody>
</table>
<div className="header1">
 <p>Find out Temperature </p>
 </div>
</div>
        );
    }
}

export default Titles;