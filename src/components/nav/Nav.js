import './Nav.css';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const LOGO_SRC = `${process.env.PUBLIC_URL}/Logo.png`;

const NAV_ITEMS = [
  { id: 'about', label: 'About Me', to: '/about' },
  { id: 'work', label: 'Work & Life', to: '/work' },
  { id: 'blog', label: 'Blog', to: '/blog' },
  { id: 'contact', label: 'Say Hi', to: '/contact' },
];

const Nav = () => {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const isPathActive = (to) => {
    if (to === '/') return pathname === '/';
    return pathname.startsWith(to);
  };

  return (
    <div className={`nav${menuOpen ? ' is-open' : ''}`}>
      <div className="container nav__bar">
        <Link
          to="/"
          className="nav__logo-home"
          onClick={closeMenu}
          aria-label="Home"
        >
          <img src={LOGO_SRC} alt="" className="nav__logo" aria-hidden />
        </Link>

        <nav className="nav__desktop" aria-label="Primary navigation">
          <Link to="/" className="nav__brand" onClick={closeMenu}>
            <img src={LOGO_SRC} alt="" className="nav__logo" aria-hidden />
            <span className="nav__brand-text">Vatsal Verma</span>
          </Link>

          <ul className="nav__list">
            {NAV_ITEMS.map(({ id, label, to }) => {
              const isActive = isPathActive(to);
              return (
                <li key={id}>
                  <Link
                    to={to}
                    className={`nav__link${isActive ? ' is-active' : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                    onClick={closeMenu}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          className="nav__toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="nav-mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="nav__toggle-bar" aria-hidden />
          <span className="nav__toggle-bar" aria-hidden />
          <span className="nav__toggle-bar" aria-hidden />
        </button>
      </div>

      <div
        id="nav-mobile-menu"
        className={`nav__mobile${menuOpen ? ' is-open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <Link to="/" className="nav__mobile-home" onClick={closeMenu}>
          Vatsal Verma
        </Link>
        <ul className="nav__mobile-list">
          {NAV_ITEMS.map(({ id, label, to }) => {
            const isActive = isPathActive(to);
            const cls = `nav__mobile-link${isActive ? ' is-active' : ''}`;
            return (
              <li key={id}>
                <Link
                  to={to}
                  className={cls}
                  onClick={closeMenu}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {menuOpen && (
        <button
          type="button"
          className="nav__backdrop"
          aria-label="Close menu"
          onClick={closeMenu}
        />
      )}
    </div>
  );
};

export default Nav;
