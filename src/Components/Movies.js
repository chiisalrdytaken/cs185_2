import React, { Component } from 'react';
import Movie from './Movie_2';
import './Movie.css';
const movies = require('./movies.json');


export class Movies extends Component {
  enlarge(image, title, release, director, rating, plot) {
    
    document.body.style.overflow = 'hidden';

    var box = document.createElement('div');
    box.id = 'box';
    box.className = 'box_setting';

    var box_wrap = document.createElement('img');
    box_wrap.src = image;
    box_wrap.id = 'box_wrap'; 


    var box_info = document.createElement('div'); 
    box_info.innerHTML = '<span class=\'title\'>&nbsp;&nbsp;'+title+'</span><br/> <span>&nbsp;&nbsp; &nbsp;<span> <span class=\'rating\'>IMDB Score: '+rating+'  </span> <br/><br/> <span class=\'d\'>&nbsp;&nbsp;&nbsp;&nbsp;Release from'+release+'</span> </br>  <span class=\'d\'> &nbsp;&nbsp;&nbsp;&nbsp;Directed by:  '+director+'</span><br/><br/>  <span class = \'polt\'>&nbsp;&nbsp;&nbsp;&nbsp;'+plot+'</span>  <br/><br/>';
    
    
    box_info.id = 'box_info';
    var appr = document.createElement('div');
    appr.id = 'appr';
    appr.className = 'appearance';


    document.body.appendChild(box);  
    document.getElementById('box').appendChild(appr);
    document.getElementById('appr').appendChild(box_wrap);
    document.getElementById('appr').appendChild(box_info);

    document.getElementById('box').addEventListener('click', function(event) {
      if(event.target.className === 'box_setting') {
        document.getElementById('box').removeChild(document.getElementById('appr'));
        document.body.removeChild(document.getElementById('box'));
        document.body.style.overflow = 'auto';
      }
    });
  }

  fetch() {
    let l = [];
    for (let movie of movies) {
      l.push(movie.id);
    }
    return l;
  }
  
  render() {
    let l = this.fetch();
    return l.map((movie) =>(
        <div className='content'>     
            <Movie movie={movie} enlarge={this.enlarge} />
        </div> 
    ));
  }
}
export default Movies;
