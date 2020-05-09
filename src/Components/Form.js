import React, { Component } from 'react';
import config from '../config.js';
import './form.css';
const firebase = require('firebase')

export class Form extends Component {
  constructor(props) {
    super();
    this.state = {
      data: [],
      name: '',
      description: '',
      say: '',
      visibility: 'private',
      email: '',
    }
  }

  componentDidMount(){
    
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
    
    firebase.database().ref('data').on('value', snapshot => {

        let data = snapshot.val();
        let add_on = [];
        let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug",
                      "Sept", "Oct", "Nov", "Dec"];
        for (let entry in data) {
          let d = new Date(data[entry].date);
          let date = month[d.getMonth()]+" "+d.getDate()+", "+d.getFullYear()+",   "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
          add_on.push({
            date: date,
            name: data[entry].name,
            description: data[entry].description,
            say: data[entry].say,
            visibility: data[entry].visibility,
            email: data[entry].email,
            
          })
        }
        this.setState({data: add_on});
    })
  }

  helper = (event) => {
    event.preventDefault();
    if (this.state.name === '') {
      alert("Missing name");
    }
    else if (this.state.say === '') {
      alert("Missing mmessage");
    }
     else {
      let formObj = {
        name: this.state.name,
        description: this.state.description,
        say: this.state.say,
        visibility: this.state.visibility,
        email: this.state.email,
        date: firebase.database.ServerValue.TIMESTAMP,
        };
      firebase.database().ref('data').push().set(formObj);
      this.setState({shouldUpdate: true});
      alert("received your message");
    }
  }

  do_change = (event) => {
    let field = event.target.name;
    let value = event.target.value;
    this.setState({[field]: value});
  }

  render() {
    return (
      <div>


          <div className='left_right'>
            <div className='form'>
            <form onSubmit={this.helper}>
              <h3>Comment Submission Form</h3>

              <p>

              <h4><dot>*</dot> What's your name?<br/>
              <input name='name' type='text' minLength='6' maxLength='19'  onChange={this.do_change} />
              </h4>

              <h4>Introduce yourself (optional)<br/>
              <input name='description' type='text'  maxLength='99' onChange={this.do_change}/>
              </h4>

              <h4><dot>*</dot> Leaving Message<br/>
                <textarea name='say' minLength='16' maxLength='499'  onChange={this.do_change}></textarea>
              </h4>
            
            <h4><dot>*</dot>What's your email?
              <input name='email' type='text'  onChange={this.do_change}/>
              </h4>
            
            <h4><dot>*</dot> Want your message to be __?<br/>
              <select id='visibility' name='visibility' onChange={this.do_change}>
                <option value='private'>private</option>
                <option value='public'>public</option>
              </select>
            </h4>

              <div><center>
                <input type='submit' id='submit' name='submit' value='Submit'></input></center>
              </div>

              
              </p>

            </form>
            </div>



            <div className='out_put'>
              <h3 >Comment</h3>
              {this.state.data.map((entry) => {
                if(entry.visibility !== 'private') {
                  
                    return (
                      <div>
                        <br/><span className='date'>{entry.date}</span> <br/>
                        <span className='date'>from: {entry.name}</span> <br/>
                            <span ><h4>{entry.description}</h4></span>
                        <span ><h4>{entry.say}</h4></span>
                        <h4 style={{ color: 'darkgreen' }}>┄┅┄┅┄┅┄┅┄┄┅┄┅┄┅┄┅┄┄┅┄┅┄┅┄┅┄</h4>
                        <br/>
                        
                      </div>
                    )
                  
                }
              })}
            </div>
          
        </div>
        </div>
    );
  }
}
export default Form;
