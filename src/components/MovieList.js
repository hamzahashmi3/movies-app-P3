import React from 'react';

const MovieList = ({favouriteComponent,movies,handleFavouritesClick}) => {
	const FavouriteComponent = favouriteComponent;

	return (
		<>
			{movies.map((movie, index) => (
				<div key={index} className='image-container d-flex justify-content-start m-3' width="30%">
					<img src={movie.Poster} alt='movie'></img>
					<div
						onClick={() => handleFavouritesClick(movie)}
						className='overlay d-flex align-items-center justify-content-center'
					>
						<FavouriteComponent />
					</div>
				</div>
			))}
		</>
	);
};

export default MovieList;
