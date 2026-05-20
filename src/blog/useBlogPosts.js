import { useCallback, useEffect, useState } from 'react';
import { fetchPostIndex } from './blogApi';
import { blogConfig } from './blogConfig';
import { sortPostsByDate } from './formatDate';

export function useBlogPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const refresh = useCallback(async (isInitial = false) => {
    try {
      const data = await fetchPostIndex();
      setPosts(sortPostsByDate(data));
      setError(null);
    } catch (err) {
      setError(err.message || 'Could not load blog posts.');
    } finally {
      if (isInitial) {
        setLoading(false);
      }
    }
  }, []);

  useEffect(() => {
    let cancelled = false;

    const run = async (isInitial) => {
      if (cancelled) return;
      await refresh(isInitial);
    };

    run(true);
    const intervalId = setInterval(() => run(false), blogConfig.pollIntervalMs);

    return () => {
      cancelled = true;
      clearInterval(intervalId);
    };
  }, [refresh]);

  return { posts, loading, error, refresh };
}
