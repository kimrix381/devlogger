const MovieCard = ({ movie }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 w-72">
      <img
        src={movie.posterURL}
        alt={movie.title}
        className="rounded w-full h-96 object-cover mb-4"
      />
      <h2 className="text-xl font-bold">{movie.title}</h2>
      <p className="text-sm text-gray-600 mb-2">{movie.description}</p>
      <p className="font-semibold text-yellow-600">⭐ {movie.rating}</p>
    </div>
  );
};
export default MovieCard;
