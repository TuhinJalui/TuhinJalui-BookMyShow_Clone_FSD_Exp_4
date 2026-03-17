import MovieCard from "./MovieCard";

function MovieGrid() {

  const movies = [
    {
      title: "Dhurandhar",
      rating: "9.3/10",
      image: "https://m.media-amazon.com/images/M/MV5BMzFiNTVkZjYtM2I3Yi00MGNjLWEyYTAtMGViNGExZmMzMGMzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },
    {
      title: "Kerala Story 2",
      rating: "9.2/10",
      image: "https://via.placeholder.com/200x300"
    },
    {
      title: "Hoppers",
      rating: "9.2/10",
      image: "https://via.placeholder.com/200x300"
    },
    {
      title: "Inception",
      rating: "8.8/10",
      image: "https://via.placeholder.com/200x300"
    }
  ];

  return (
    <div className="movie-grid">
      {movies.map((movie, i) => (
        <MovieCard key={i} movie={movie} />
      ))}
    </div>
  );
}

export default MovieGrid;