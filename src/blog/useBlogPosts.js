import { useCallback, useEffect, useState } from 'react';
import { fetchPostIndex } from './blogApi';
import { sortPostsByDate } from './formatDate';

export function useBlogPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const refresh = useCallback(async () => {
    try {
      const data = await fetchPostIndex();
      setPosts(sortPostsByDate(data));
      setError(null);
    } catch (err) {
      setError(err.message || 'Could not load blog posts.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      if (cancelled) return;
      await refresh();
    };

    run();

    return () => {
      cancelled = true;
    };
  }, [refresh]);

  return { posts, loading, error, refresh };
}
