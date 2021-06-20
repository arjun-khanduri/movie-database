import React from 'react';
import Card from './Card';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: '',
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
  }

  callAPI(){
    fetch('http://localhost:9000/testAPI')
    .then(res => res.text())
    .then(res => this.setState({apiResponse: res}))
  }

  componentDidMount() {
    this.callAPI();
  }

  searchText = (e) => {
    this.setState({ result: e.target.value });
  }

  search = () => {
    const url = `http://www.omdbapi.com/?apikey=a14a00a1&t=${this.state.result}`;
    fetch(url)
      .then(response => response.json())
      .then(movie => {
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

  handleKeyPress = (e) => {
    if (e.key === 'Enter')
      this.search();
  }

  render() {
    return (
      <div className="App">
        <div className="nav">
          <div className="search-container">
            <input type="text" onChange={this.searchText} onKeyPress={this.handleKeyPress} />
            <button id="search-btn" onClick={this.search} ref={node => (this.btn = node)} >Search</button>
          </div>
        </div>
        <div className="main">
          {this.state.showCard ?
            <div className="list">
              <Card movie={this.state.movie} />
            </div>
            :
            <div className="no-movies">
              {this.state.apiResponse}
              Search for a title in the search box above
            </div>
          }
        </div>
      </div>
    );
  }
}

export default App;
