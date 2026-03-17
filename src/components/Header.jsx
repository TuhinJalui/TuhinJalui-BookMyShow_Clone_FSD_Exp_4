function Header({ totalTickets }) {
  return (
    <div className="header">
      <h1>🎬 BookMyShow Clone</h1>
      <p>Total Tickets: {totalTickets}</p>
    </div>
  );
}

export default Header;