import React from 'react';

class Card extends React.Component {
    render() {
        const { movie } = this.props;
        return (
            <div className="movie-card">
                <div className="left">
                    <img alt="movie-poster" src={movie[0].Poster} />
                </div>
                <div className="right">
                    <div className="title">{movie[0].Title}</div>
                    <div className="plot"><strong>Director: </strong>{movie[0].Director}</div>
                    <div className="plot"><strong>Year: </strong>{movie[0].Year}</div>
                    <div className="plot"><strong>Runtime: </strong>{movie[0].Runtime}</div>
                    <div className="plot">
                        <strong>Genre: </strong>
                        {movie[0].Genre}
                    </div>
                    <div className="plot">
                        <strong>Plot: </strong>{movie[0].Plot}
                    </div>
                    <div className="plot">
                        <strong>Actors: </strong>{movie[0].Actors}
                    </div>
                    <div className="plot">
                        <strong>Language: </strong>{movie[0].Language}
                    </div>
                    <div className="plot">
                        <strong>Collection: </strong>{movie[0].Collection}
                    </div>
                    <div className="footer">
                        <div className="rating"><strong>IMDb: </strong>{movie[0].imdbRating}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;