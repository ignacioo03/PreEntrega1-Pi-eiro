import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='logo'>
        <a className='titulo'>Pastas La Hilda 🍜</a>
      </div>
      <div className='navbar-links'>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <a className='nav-link' aria-current='page'>Home</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link'>Recetas</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link'>Nosotros</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link'>Contacto</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link cart'>Carrito </a>
            <span className='cart-number'>0</span>
          </li>         
        </ul>
        </div>    
    </nav>
  );
}

export default Navbar;