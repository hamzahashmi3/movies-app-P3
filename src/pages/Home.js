import React, { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import MovieListHeading from "../components/MovieListHeading";
import SearchBox from "../components/SearchBox";
import AddFavourites from "../components/AddFavourites";
import RemoveFavourites from "../components/RemoveFavourites";

const Home = (props) => {
  const [movies, setMovies] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	const [favourites, setFavourites] = useState([]);

	// const getData = async () => {
	// 	const url = `http://www.omdbapi.com/?i=tt3896198&apikey=e913970d`;
	// 	const response = await fetch(url);
	// 	const responseJson = await response.json();
	// 	setMovies(responseJson)
	// }

	// useEffect(()=>{
	// 	getData()
	// },[movies])

	const getMovieRequest = async (searchValue) => {
		const url = `http://www.omdbapi.com/?s=${searchValue}&i=tt3896198&apikey=e913970d`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

	const saveToLocalStorage = (items) => {
		localStorage.setItem("react-movie-app-favourites", JSON.stringify(items))
	}

  const addFavouriteMovie = (movie) => {
		const newFavouriteList = [...favourites, movie];
		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList)
  }

  const removeFavouriteMovie = (movie) => {
	const newFavouriteList = favourites.filter(
		(favourite) => favourite.imdbID !== movie.imdbID
	);
	setFavourites(newFavouriteList);
	saveToLocalStorage(newFavouriteList);
  }

	return (
		<div className='container-fluid movie-app'>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading='Movies' />
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
			<div className='row'>
				<MovieList
					movies={movies}
					handleFavouritesClick={addFavouriteMovie}
					favouriteComponent={AddFavourites}
				/>
			</div>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading='Favourites' />
			</div>
			<div className='row'>
				<MovieList
					movies={favourites}
					handleFavouritesClick={removeFavouriteMovie}
					favouriteComponent={RemoveFavourites}
				/>
			</div>
		</div>
	);
};

export default Home;
