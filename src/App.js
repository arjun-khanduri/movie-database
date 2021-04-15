import React from 'react';
import Card from './Card';

class App extends React.Component {
  state = {
    result: '',
    movie: [
      {
        Title: '',
        Year: '',
        Actors: '',
        Genre: '',
        Language: '',
        Director: '',
        Runtime: '',
        Poster: '',
        Plot: '',
        imdbRating: '',
        Collection: ''
      }
    ],
    showCard: false
  }

  searchText = (e) => {
    this.setState({ result: e.target.value });
  }

  search = () => {
    const url = `http://www.omdbapi.com/?apikey=a14a00a1&t=${this.state.result}`;
    fetch(url)
      .then(response => response.json())
      .then(movie => {
        console.log(movie);
        console.log(typeof (movie));
        console.log(movie.Actors);
        console.log(movie.Title);
        this.setState({
          movie: [{
            Title: movie.Title,
            Year: movie.Year,
            Actors: movie.Actors,
            Genre: movie.Genre,
            Language: movie.Language,
            Director: movie.Director,
            Runtime: movie.Runtime,
            Poster: movie.Poster,
            Plot: movie.Plot,
            imdbRating: movie.imdbRating,
            Collection: movie.BoxOffice
          }],
          showCard: true
        })
      })
  }

  render() {
    return (
      <div className="App">
        <div className="nav">
          <div className="search-container">
            <input type="text" onChange={this.searchText} />
            <button id="search-btn" onClick={this.search}>Search</button>
          </div>
        </div>
        <div className="main">
          {this.state.showCard ?
            <div className="list">
              <Card movie={this.state.movie} />
            </div>
            :
            <div className="no-movies">
              Search for a title in the search box above
            </div>
          }
        </div>
      </div>
    );
  }
}

export default App;
