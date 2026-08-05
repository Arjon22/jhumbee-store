import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        Jhumbee
      </div>

      <nav className="navbar-menu">
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">Categories</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>

      <div className="navbar-actions">
        <button>⌕</button>
        <button>♙</button>
        <button>🛒</button>
      </div>
    </header>
  );
}

export default Navbar;