import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import BookingCart from "./components/BookingCart";

function App() {

  const movies = [
  {
    id: 1,
    title: "Avengers Doomsday",
    price: 300,
    image: "https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2025/12/avengers-doomsday-poster.jpg"
  },
  {
    id: 2,
    title: "King",
    price: 250,
    image: "https://images.filmibeat.com/ph-big/2025/11/king1762163388_0.jpg"
  },
  {
    id: 3,
    title: "Spider-Man : Brand New Day",
    price: 200,
    image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2e317a1c-f1ce-4a5f-90db-d88cc01db2d0/djh8uwc-1df0ea1b-f6f3-4ac5-82b7-dcf8735947bc.png/v1/fill/w_734,h_1088,q_70,strp/spider_man_4_brand_new_day_teaser_poster_hd_2026_by_mrandrew7w7_djh8uwc-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTg5NyIsInBhdGgiOiJcL2ZcLzJlMzE3YTFjLWYxY2UtNGE1Zi05MGRiLWQ4OGNjMDFkYjJkMFwvZGpoOHV3Yy0xZGYwZWExYi1mNmYzLTRhYzUtODJiNy1kY2Y4NzM1OTQ3YmMucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Q9m8x-rC9ekf-9RVMzKPJfk2VWZjUKSqx-yNHtOqO7c"
  },
  {
    id: 4,
    title: "Toxic : A Fairy Tale For Grown-ups",
    price: 280,
    image: "https://assets.gadgets360cdn.com/pricee/assets/product/202406/Toxic-A-Fairy-Tale-For-Grown-ups_1718603472.jpg"
  },
  {
    id: 5,
    title: "Bhoot Bangla",
    price: 320,
    image: "https://assetscdn1.paytm.com/images/cinema/Bhoot-Bangla--Gallery-d84b0110-6f47-11ef-8cab-43ca45a3e1e8.jpg?format=webp"
  },
  {
    id: 6,
    title: "The Odyssey",
    price: 220,
    image: "https://m.media-amazon.com/images/M/MV5BN2MyYjk2MWMtODMyZS00MDUyLWE0OGQtOTQ3MGY0MDE0ZjVmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
  }
];
  const [bookings, setBookings] = useState([]);

  function addBooking(movie, quantity) {
    const newBooking = { ...movie, quantity };
    setBookings([...bookings, newBooking]);
  }

  function removeBooking(index) {
    setBookings(bookings.filter((_, i) => i !== index));
  }

  const totalTickets = bookings.reduce((sum, b) => sum + b.quantity, 0);

  return (
    <div>
      <Header totalTickets={totalTickets} />

      <div className="main">
        <MovieList movies={movies} addBooking={addBooking} />
        <BookingCart bookings={bookings} removeBooking={removeBooking} />
      </div>
    </div>
  );
}

export default App;