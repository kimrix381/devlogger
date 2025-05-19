import { useState } from "react";
import MovieList from "./components/movielist.jsx";
import Filter from "./components/filter.jsx";
import AddMovie from "./components/addmovie.jsx";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "Dream within a dream.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",
      rating: 8.8,
    },
    {
      title: "The Matrix",
      description: "Reality is an illusion.",
      posterURL:
        "https://image.tmdb.org/t/p/original/aA5qHS0FbSXO8PxcxUIHbDrJyuh.jpg",
      rating: 8.7,
    },
  ]);

  const [filterTitle, setFilterTitle] = useState("");
  const [filterRate, setFilterRate] = useState(0);

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.rating >= filterRate
  );

  const handleAddMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">🎬 My Movie App</h1>
      <Filter
        filterTitle={filterTitle}
        setFilterTitle={setFilterTitle}
        filterRate={filterRate}
        setFilterRate={setFilterRate}
      />
      <AddMovie onAdd={handleAddMovie} />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
