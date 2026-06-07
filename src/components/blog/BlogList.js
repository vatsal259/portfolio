import React from 'react';
import { Link } from 'react-router-dom';
import SectionPage from '../../pages/SectionPage';
import Seo from '../seo/Seo';
import { PAGE_SEO } from '../../seo/siteConfig';
import { useBlogPosts } from '../../blog/useBlogPosts';
import { formatDate } from '../../blog/formatDate';
import './Blog.css';

const BlogList = () => {
  const { posts, loading, error } = useBlogPosts();

  return (
    <>
    <Seo
      title={PAGE_SEO.blog.title}
      description={PAGE_SEO.blog.description}
      path={PAGE_SEO.blog.path}
    />
    <SectionPage
      eyebrow="Writing"
      title="Blog"
      subtitle="Technical notes and essays on software engineering, systems design, and lessons from building in production."
    >
      <section className="blog-page">
        <div className="blog-page__inner">
          {loading && <p className="blog-status">Loading articles…</p>}
          {error && <p className="blog-status blog-status--error">{error}</p>}

          {!loading && !error && posts.length === 0 && (
            <p className="blog-status">New articles will appear here soon.</p>
          )}

          {!loading && !error && posts.length > 0 && (
            <ul className="blog-list">
              {posts.map((post) => (
                <li key={post.slug}>
                  <article className="blog-card">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="blog-card__link"
                      aria-label={`Read article: ${post.title}`}
                    >
                      <div className="blog-card__meta">
                        {post.date && (
                          <time dateTime={post.date}>{formatDate(post.date)}</time>
                        )}
                        {post.readingMinutes > 0 && (
                          <span className="blog-card__meta-sep" aria-hidden>
                            ·
                          </span>
                        )}
                        {post.readingMinutes > 0 && (
                          <span>{post.readingMinutes} min read</span>
                        )}
                      </div>

                      <h2 className="blog-card__title">{post.title}</h2>

                      {post.excerpt && (
                        <p className="blog-card__excerpt">{post.excerpt}</p>
                      )}

                      <span className="blog-card__cta">
                        Read article
                        <span className="blog-card__cta-arrow" aria-hidden>
                          →
                        </span>
                      </span>
                    </Link>
                  </article>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </SectionPage>
    </>
  );
};

export default BlogList;
