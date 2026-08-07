/* Jhumbee Quiet Atelier navigation: calm editorial hierarchy, direct anchors, tactile mobile behavior. */
import { useEffect, useState } from "react";
import "./Navbar.css";

function Icon({ type }: { type: "search" | "user" | "heart" | "bag" }) {
  if (type === "search") return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.5" /><path d="m16 16 5 5" /></svg>;
  if (type === "user") return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="3.5" /><path d="M5 20c.8-3.1 3.3-5 7-5s6.2 1.9 7 5" /></svg>;
  if (type === "heart") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 8.5c0 5-8.8 10.2-8.8 10.2S3.2 13.5 3.2 8.5a4.5 4.5 0 0 1 8.1-2.7A4.5 4.5 0 0 1 20.8 8.5Z" /></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 8.5h14l-1 11H6l-1-11Z" /><path d="M9 9V6a3 3 0 0 1 6 0v3" /></svg>;
}

const links = [
  { label: "Home", href: "#home" },
  { label: "Shop", href: "#shop" },
  { label: "Categories", href: "#categories" },
  { label: "Our story", href: "#story" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const onCart = () => setCartCount((count) => count + 1);
    window.addEventListener("jhumbee:add-to-cart", onCart);
    return () => window.removeEventListener("jhumbee:add-to-cart", onCart);
  }, []);

  const goTo = (href: string) => {
    setMenuOpen(false);
    setSearchOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const submitSearch = (event: React.FormEvent) => {
    event.preventDefault();
    goTo("#shop");
    window.dispatchEvent(new CustomEvent("jhumbee:search", { detail: query }));
  };

  return <>
    <div className="announcement-bar">Complimentary delivery on orders over $150 <span>—</span> The new everyday edit is here</div>
    <header className={`navbar ${menuOpen ? "menu-open" : ""}`}>
      <button className="mobile-menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-label={menuOpen ? "Close menu" : "Open menu"}><span /><span /><span /></button>
      <a className="navbar-logo" href="#home" onClick={(event) => { event.preventDefault(); goTo("#home"); }} aria-label="Jhumbee home">jhumbee<span className="logo-mark" /></a>
      <nav className="navbar-menu" aria-label="Primary navigation">{links.map((link) => <a key={link.href} href={link.href} onClick={(event) => { event.preventDefault(); goTo(link.href); }}>{link.label}</a>)}</nav>
      <div className="navbar-actions">
        <button className="nav-icon" onClick={() => setSearchOpen((open) => !open)} aria-label="Search"><Icon type="search" /></button>
        <button className="nav-icon desktop-only" aria-label="Account"><Icon type="user" /></button>
        <button className={`nav-icon desktop-only ${saved ? "is-active" : ""}`} onClick={() => setSaved((value) => !value)} aria-label="Wishlist"><Icon type="heart" /></button>
        <button className="nav-icon cart-button" onClick={() => goTo("#shop")} aria-label={`Shopping bag, ${cartCount} items`}><Icon type="bag" />{cartCount > 0 && <span className="cart-count">{cartCount}</span>}</button>
      </div>
      {searchOpen && <form className="search-panel" onSubmit={submitSearch}><Icon type="search" /><input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search the everyday edit" aria-label="Search products" /><button type="submit">View the edit</button></form>}
    </header>
    {menuOpen && <div className="mobile-menu-panel">{links.map((link, index) => <a key={link.href} href={link.href} onClick={(event) => { event.preventDefault(); goTo(link.href); }}><span>0{index + 1}</span>{link.label}</a>)}<div className="mobile-menu-note">Considered pieces for ordinary days.</div></div>}
  </>;
}
