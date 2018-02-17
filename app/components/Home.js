import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';

export default class Home extends Component {
  constructor(props) {
      super(props);
      this.state = {
        movie: undefined,
      };
  }


  searchMovie(e){
    e.preventDefault();

    const input = this.refs.inputtedValue.value.split(" ").join("+").toLowerCase();
    let api_key = '40e9cece'
    let api_url = `http://www.omdbapi.com/?apikey=${api_key}&s=${input}`

    axios.get(api_url, {
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      }
    }).then((results) => {
      //console.log(results)
       this.setState({
         movie: results.data
       })
      // this.refs.inputtedValue.value = "";
    });
  }



  render() {
    console.log(this.state.movie)
    const displayMovie = () => {
      if(this.state.movie && this.state.movie.Search){
        return (
          <div>
            <h3 className="center-align" id="click-title">Click one to see OMDB</h3>
            {
              this.state.movie.Search.map((res, index) =>{
              return (
                <div key={index} className="center-align">
                  <a id="links" href={`https://www.imdb.com/title/${res.imdbID}`} target='blank'><p>{res.Title}</p></a>
                </div>  
                )
            })
          }
        </div>  
        )
      }
    }


     return (
        <div >
          <h2 className="center-align" id="heading">Begin Typing a Movie Title</h2>
          <input id="text" className="center-align w3-container" ref="inputtedValue" onChange={this.searchMovie.bind(this)}/>
          {displayMovie()}
        </div>
    );
  }
};