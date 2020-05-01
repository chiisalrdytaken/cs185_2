import React, { Component } from 'react';
import { Button} from 'react-bootstrap';


export class Videos extends Component{
  render(){

    return (
    	
        <div>
		<center><iframe width="560" height="315" src="https://www.youtube.com/embed/LMhOTPe3Aqk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>
        
        <center><h3> {'Official Intro'} </h3></center>
        </div>
    	);
             
      
  }

}

export default Videos;
