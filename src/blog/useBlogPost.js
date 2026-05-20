import { useCallback, useEffect, useState } from 'react';
import { fetchPost, fetchPostIndex } from './blogApi';
import { blogConfig } from './blogConfig';

export function useBlogPost(slug) {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const refresh = useCallback(
    async (isInitial = false) => {
      try {
        let manifestMeta = { slug };
        try {
          const index = await fetchPostIndex();
          const match = index.find((entry) => entry.slug === slug);
          if (match) manifestMeta = match;
        } catch {
          // Listing optional when opening a direct post URL
        }

        const data = await fetchPost(slug, manifestMeta);
        setPost(data);
        setError(null);
      } catch (err) {
        setError(err.message || 'Could not load this post.');
      } finally {
        if (isInitial) {
          setLoading(false);
        }
      }
    },
    [slug]
  );

  useEffect(() => {
    let cancelled = false;

    const run = async (isInitial) => {
      if (cancelled) return;
      await refresh(isInitial);
    };

    setPost(null);
    setLoading(true);
    setError(null);
    run(true);
    const intervalId = setInterval(() => run(false), blogConfig.pollIntervalMs);

    return () => {
      cancelled = true;
      clearInterval(intervalId);
    };
  }, [refresh]);

  return { post, loading, error, refresh };
}
