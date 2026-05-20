// GitHub Pages SPA redirect handler (https://github.com/rafgraph/spa-github-pages)
(function redirectGitHubPagesSpa(l) {
  if (l.search[1] === '/') {
    const decoded = l.search
      .slice(1)
      .split('&')
      .map((s) => s.replace(/~and~/g, '&'))
      .join('?')
      .replace(/^\//, '');
    window.history.replaceState(
      null,
      null,
      l.pathname.slice(0, -1) + (decoded || '') + l.hash
    );
  }
})(window.location);
