import React from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown, { defaultUrlTransform } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import SectionPage from '../../pages/SectionPage';
import Seo from '../seo/Seo';
import { SITE_URL, buildArticleJsonLd } from '../../seo/siteConfig';
import { getBlogPostBySlug, getRelatedPosts } from '../../seo/blogPosts';
import { useBlogPost } from '../../blog/useBlogPost';
import { formatDate } from '../../blog/formatDate';
import './Blog.css';

/** Allow inlined diagrams (data:image/…) while keeping default URL safety. */
function blogUrlTransform(url) {
  if (url.startsWith('data:image/')) return url;
  return defaultUrlTransform(url);
}

function MarkdownLink({ href = '', children, node, ...props }) {
  const isInternalPath = href.startsWith('/');
  const isSiteUrl = href.startsWith(SITE_URL);
  const isHash = href.startsWith('#');

  if (isInternalPath) {
    return (
      <Link to={href} {...props}>
        {children}
      </Link>
    );
  }

  if (isSiteUrl) {
    const path = href.slice(SITE_URL.length) || '/';
    return (
      <Link to={path} {...props}>
        {children}
      </Link>
    );
  }

  if (isHash) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}

const markdownComponents = {
  h1: ({ node, children, ...props }) => <h2 {...props}>{children}</h2>,
  a: MarkdownLink,
  img: ({ node, alt, ...props }) => (
    <img {...props} alt={alt || ''} loading="lazy" decoding="async" />
  ),
};

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

  const seoPost = post || getBlogPostBySlug(slug);
  const notFound = !loading && !post && !getBlogPostBySlug(slug);
  const heroTitle =
    post?.title || seoPost?.title || (loading ? 'Loading…' : 'Article not found');
  const heroSubtitle = post?.date ? (
    <>
      <time dateTime={post.date}>{formatDate(post.date)}</time>
      {post.readingMinutes > 0 && ` · ${post.readingMinutes} min read`}
    </>
  ) : (
    formatArticleMeta(post)
  );
  const related = slug ? getRelatedPosts(slug) : [];

  return (
    <>
    {notFound ? (
      <Seo
        title="Article not found"
        description="This article is not on vatsalverma.in. Browse the blog for Java, Spring, and systems writing."
        path={`/blog/${slug}`}
        noindex
      />
    ) : seoPost ? (
      <Seo
        title={seoPost.title}
        description={
          seoPost.excerpt || `Article by Vatsal Verma: ${seoPost.title}`
        }
        path={`/blog/${slug}`}
        type="article"
        publishedTime={seoPost.date || undefined}
        modifiedTime={seoPost.date || undefined}
        jsonLd={buildArticleJsonLd(seoPost)}
      />
    ) : (
      <Seo
        title="Article"
        description="Article by Vatsal Verma."
        path={`/blog/${slug}`}
        noindex
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
          {notFound && (
            <p className="blog-status blog-status--error">
              This article does not exist. <Link to="/blog">Browse the blog</Link>.
            </p>
          )}
          {error && !notFound && (
            <p className="blog-status blog-status--error">{error}</p>
          )}

          {post && (
            <>
              {post.excerpt && (
                <p className="blog-article__deck">{post.excerpt}</p>
              )}
              <div className="blog-prose">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  urlTransform={blogUrlTransform}
                  components={markdownComponents}
                >
                  {post.content}
                </ReactMarkdown>
              </div>
              {related.length > 0 && (
                <nav className="blog-related" aria-label="More articles">
                  <h2 className="blog-related__title">More to read</h2>
                  <ul className="blog-related__list">
                    {related.map((item) => (
                      <li key={item.slug}>
                        <Link
                          to={`/blog/${item.slug}`}
                          className="blog-related__link"
                        >
                          <span className="blog-related__name">{item.title}</span>
                          {item.excerpt && (
                            <span className="blog-related__excerpt">
                              {item.excerpt}
                            </span>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}
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
