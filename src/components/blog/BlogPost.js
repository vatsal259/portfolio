import React from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import SectionPage from '../../pages/SectionPage';
import Seo from '../seo/Seo';
import { buildArticleSchema } from '../../seo/siteConfig';
import { useBlogPost } from '../../blog/useBlogPost';
import { formatDate } from '../../blog/formatDate';
import './Blog.css';

function formatArticleMeta(post) {
  if (!post) return undefined;

  const parts = [];
  if (post.date) parts.push(formatDate(post.date));
  if (post.readingMinutes > 0) {
    parts.push(`${post.readingMinutes} min read`);
  }

  return parts.length > 0 ? parts.join(' · ') : undefined;
}

const BlogPost = () => {
  const { slug } = useParams();
  const { post, loading, error } = useBlogPost(slug);

  const heroTitle = post?.title || (loading ? 'Loading…' : 'Article');
  const heroSubtitle = formatArticleMeta(post);

  return (
    <>
    {post && (
      <Seo
        title={post.title}
        description={post.excerpt || `Article by Vatsal Verma: ${post.title}`}
        path={`/blog/${post.slug}`}
        type="article"
        jsonLd={buildArticleSchema(post)}
      />
    )}
    <SectionPage
      eyebrow="Article"
      title={heroTitle}
      subtitle={heroSubtitle}
    >
      <article className="blog-page blog-page--post">
        <div className="blog-page__inner">
          <Link to="/blog" className="blog-article__back">
            ← All articles
          </Link>

          {loading && !post && <p className="blog-status">Loading article…</p>}
          {error && <p className="blog-status blog-status--error">{error}</p>}

          {post && (
            <>
              {post.excerpt && (
                <p className="blog-article__deck">{post.excerpt}</p>
              )}
              <div className="blog-prose">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {post.content}
                </ReactMarkdown>
              </div>
              <footer className="blog-article__footer">
                <Link to="/blog" className="blog-article__footer-link">
                  ← Back to all articles
                </Link>
              </footer>
            </>
          )}
        </div>
      </article>
    </SectionPage>
    </>
  );
};

export default BlogPost;
