// App.js
import React, { useState } from 'react';
import MovieList from './movielist';
import Filter from './filter';
import './App.css';


const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'fastx',
      description: 'This is movie 1',
      posterURL: './fastx.jpeg',
      rating: 9.5,
    },
    {
      title: 'Movie 2',
      description: 'This is movie 2',
      posterURL: 'https://example.com/movie2.jpg',
      rating: 8.2,
    },
    // Add more movies here...
  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const handleTitleFilterChange = (event) => {
    setTitleFilter(event.target.value);
  };

  const handleRatingFilterChange = (event) => {
    setRatingFilter(event.target.value);
  };

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
    movie.rating >= parseFloat(ratingFilter)
  );

  return (
    <div className="app">
      <h1>Movie Library</h1>
      <Filter
        titleFilter={titleFilter}
        ratingFilter={ratingFilter}
        onTitleFilterChange={handleTitleFilterChange}
        onRatingFilterChange={handleRatingFilterChange}
      />
      <MovieList movies={filteredMovies} />
      {/* Add form or button to add new movies */}
    </div>
   
  );
};
export default App;

