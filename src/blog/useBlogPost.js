import { useCallback, useEffect, useState } from 'react';
import { fetchPost, fetchPostIndex } from './blogApi';

export function useBlogPost(slug) {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const refresh = useCallback(async () => {
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
      setLoading(false);
    }
  }, [slug]);

  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      if (cancelled) return;
      await refresh();
    };

    setPost(null);
    setLoading(true);
    setError(null);
    run();

    return () => {
      cancelled = true;
    };
  }, [refresh]);

  return { post, loading, error, refresh };
}
