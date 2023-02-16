import React from "react";


const MovieCard = (props) => {
    return(
        <div className="movie">
            <img src="https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" alt="movie poster" />
            <p className="category">Movie</p>
            <p className="title">Batman</p>
        </div>
    )
}
export default MovieCard;