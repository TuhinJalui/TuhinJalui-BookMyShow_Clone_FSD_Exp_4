function BookingCart({ bookings, removeBooking }) {

  const totalAmount = bookings.reduce(
    (sum, b) => sum + b.price * b.quantity,
    0
  );

  return (
    <div className="cart">
      <h2>Booking Cart</h2>

      {bookings.length === 0 && <p>No bookings yet</p>}

      {bookings.map((b, index) => (
        <div key={index} className="cart-item">
          <span>{b.title} x {b.quantity}</span>
          <span>₹{b.price * b.quantity}</span>

          <button
            className="remove-btn"
            onClick={() => removeBooking(index)}
          >
            X
          </button>
        </div>
      ))}

      <hr />

      <h3>Total: ₹{totalAmount}</h3>
    </div>
  );
}

export default BookingCart;