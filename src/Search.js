// importing required files from react-dom
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

//our api key and api host.
const API_KEY = "e6672dd2";
const HOST = `http://www.omdbapi.com/?apikey=${API_KEY}&`;


//js es6 class called search 

class Search extends React.Component {

  state = {
    inputValue: "",
    movies: [],
    matched: ""
  };
  
  //this function is for controlled-component.
  valueChanged = e => {
    this.setState({ inputValue: e.target.value });
  };

  //Atlast fetching data from our OMDB api and prevent default
  //when sumbit.
  searched = e => {
    e.preventDefault();
    if (this.state.inputValue !== "") {
      fetch(`${HOST}s=${this.state.inputValue}`)
        .then(response => response.json())
        .then(data => !data.Error ?   //it checks the data received from our api is error free
           this.setState({
                inputValue: "",
                movies: data.Search,
                matched: ""
              }) :
               this.setState({ inputValue: "", matched: this.state.inputValue })
        );
    }
  };
 
 
  render() {

    return (
      //this is for input and input button
      <div>
        <Link to="/">
          {" "}
          <button className="search-back-button">
            <FaArrowLeft className="arrow-icon" />
            Go Back{" "}
          </button>
        </Link>

        <form className="search-form" onSubmit={e => this.searched(e)}>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.valueChanged}
            placeholder="Search for movies"
          />
          <button className="search-button">Search</button>
        </form>

        {this.state.matched !== "" && (
          <div style={{ color: "red", margin: "15px", fontSize: "20px" }}>
            Sorry, no movies found in our database with the name of{" "}
            <span style={{ fontWeight: "bolder" }}>
              {" "}
              "{this.state.matched}"!
            </span>
          </div>
        )}

        {this.state.matched === "" &&

          this.state.movies.map((eachMovie, index) => (

            <div key={index} className="search-list">

              <img className="poster-image"
                src={eachMovie.Poster}

                onError={e => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://unfvideo.files.wordpress.com/2018/09/nia.jpg";
                }}
                alt={eachMovie.Poster} />
              <p>{eachMovie.Title}</p>

              {!(this.props.finished.includes(eachMovie) ||
                this.props.want.includes(eachMovie)) &&

                (<div key={index}>
                  <button
                    className="finished"
                    onClick={() => this.props.addToWatch(eachMovie)}>
                    Already Watched
                  </button>

                  <button
                    className="wish"
                    onClick={() => this.props.addToWant(eachMovie)}>
                    Want to Watch
                  </button>
                </div>
              )}
            </div>
          ))}
      </div>
    );
  }
}

export default Search;
