import MovieCard from "./moviecard.jsx";

const MovieList = ({ movies }) => {
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
};
export default MovieList;
