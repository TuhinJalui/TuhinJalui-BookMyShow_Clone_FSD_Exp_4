import MovieCard from "./MovieCard";

function MovieList({ movies, addBooking }) {
  return (
    <div className="movies-section">
      <h2>Now Showing</h2>

      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            addBooking={addBooking}
          />
        ))}
      </div>
    </div>
  );
}

export default MovieList;