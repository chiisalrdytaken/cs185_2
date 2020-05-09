import React, { Component } from 'react';

import './App.css'
import Body from './Components/Body'
import TabList from './Components/TabList'

import PP from './image2/pika1.jpg'


export class App extends Component{
  constructor(){
    super();
    this.state ={
      activeTab: 1
    }
    this.changeTab = (id) => {
      this.setState({
        activeTab: id
      })
    }
  }
  render(){
    const tabs = [
    {
      id:1,
      title: 'Home'
    },

    {
      id:2,
      title: 'Images'
    },

    {
      id:3,
      title: 'Videos'
    },

    {
      id:4,
      title: 'AboutMe'
    },
    {
      id:5,
      title: 'Form'
    }
    ]


    return(
      
      

      <div className= "body">

        <div className = "header">
           <img src={PP} height="170" width="170" align ="left" />
           <h4>{"Chi Xu's main page"} </h4>
        </div>
      


        <div className ="nav-bar"> 
          

          <TabList tabs={tabs} 
          changeTab={this.changeTab}
            
          activeTab={this.state.activeTab} />
          
          
        </div>

       
        <div className ="main-body">
          <Body activeTab={this.state.activeTab}/>
        </div>

        
          
        
      </div>

      );
  }
}


export default App;
