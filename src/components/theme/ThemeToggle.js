import './ThemeToggle.css';
import { HiMoon, HiSun } from 'react-icons/hi';

const ThemeToggle = ({ theme, onToggle, className = '' }) => {
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      className={`theme-toggle${isDark ? ' is-dark' : ' is-light'}${className ? ` ${className}` : ''}`}
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={!isDark}
    >
      <HiSun className="theme-toggle__icon theme-toggle__icon--sun" aria-hidden />
      <HiMoon className="theme-toggle__icon theme-toggle__icon--moon" aria-hidden />
    </button>
  );
};

export default ThemeToggle;
