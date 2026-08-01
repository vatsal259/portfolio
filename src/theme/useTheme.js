import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'theme';
const THEMES = ['dark', 'light'];

export const getTheme = () => {
  if (typeof window === 'undefined') return 'dark';

  const stored = localStorage.getItem(STORAGE_KEY);
  if (THEMES.includes(stored)) return stored;

  return 'dark';
};

export const setTheme = (theme) => {
  if (!THEMES.includes(theme)) return;

  document.documentElement.dataset.theme = theme;
  localStorage.setItem(STORAGE_KEY, theme);
};

export const applyThemeChange = (theme, originElement) => {
  if (!THEMES.includes(theme)) return;

  const update = () => setTheme(theme);

  if (originElement?.getBoundingClientRect) {
    const rect = originElement.getBoundingClientRect();
    document.documentElement.style.setProperty(
      '--vt-x',
      `${rect.left + rect.width / 2}px`
    );
    document.documentElement.style.setProperty(
      '--vt-y',
      `${rect.top + rect.height / 2}px`
    );
  }

  const prefersReduced = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  if (!prefersReduced && document.startViewTransition) {
    document.startViewTransition(update);
  } else {
    update();
  }
};

export const useTheme = () => {
  const [theme, setThemeState] = useState(getTheme);

  useEffect(() => {
    setTheme(theme);
  }, [theme]);

  const toggleTheme = useCallback(
    (event) => {
      const next = theme === 'dark' ? 'light' : 'dark';
      applyThemeChange(next, event?.currentTarget);
      setThemeState(next);
    },
    [theme]
  );

  return { theme, toggleTheme };
};
