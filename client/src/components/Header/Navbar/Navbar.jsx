import {Link} from "react-router-dom";

const Navbar = () => {
  return (
  <nav className="navbar">
    <ul className="ul_navbar">
      <Link className='link' to="/">HOME</Link>
      <Link className='link' to="/Manga">MANGA</Link>
      <Link className='link' to="/superheroes">SUPERHÉROES</Link>
      <Link className='link' to="/generos">GÉNEROS</Link>
      <Link className='link' to="/clasicos">CLÁSICOS</Link>
    </ul>
</nav>
  );
};

export default Navbar;
