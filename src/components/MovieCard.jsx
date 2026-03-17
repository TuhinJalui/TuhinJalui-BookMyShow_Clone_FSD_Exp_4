import { useState } from "react";

function MovieCard({ movie, addBooking }) {

  const [quantity, setQuantity] = useState(1);

  return (
    <div className="movie-card">

      {/* 🎬 Movie Poster */}
      <img src={movie.image} alt={movie.title} />

      <h3>{movie.title}</h3>
      <p>₹{movie.price}</p>

      <input
        type="number"
        min="1"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />

      <button onClick={() => addBooking(movie, quantity)}>
        Book Now
      </button>
    </div>
  );
}

export default MovieCard;