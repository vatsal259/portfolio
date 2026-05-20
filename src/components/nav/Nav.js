import './Nav.css';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const NAV_ITEMS = [
  { id: 'about', label: 'About Me', to: '/about' },
  { id: 'work', label: 'Build + Life', to: '/work' },
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
        <nav className="nav__desktop" aria-label="Primary navigation">
          <Link to="/" className="nav__brand" onClick={closeMenu}>
            Vatsal Verma
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
          {menuOpen ? <FiX aria-hidden /> : <FiMenu aria-hidden />}
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
