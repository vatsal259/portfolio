import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import SectionPage from '../../pages/SectionPage';
import Seo from '../seo/Seo';
import { PAGE_SEO, buildBlogListingSchema } from '../../seo/siteConfig';
import { useBlogPosts } from '../../blog/useBlogPosts';
import { formatDate } from '../../blog/formatDate';
import './Blog.css';

function Meta({ post }) {
  return (
    <div className="blog-card__meta">
      {post.date && <time dateTime={post.date}>{formatDate(post.date)}</time>}
      {post.date && post.readingMinutes > 0 && <span aria-hidden>·</span>}
      {post.readingMinutes > 0 && <span>{post.readingMinutes} min</span>}
    </div>
  );
}

function ArticleCard({ post }) {
  return (
    <article className="blog-card">
      <Link
        to={`/blog/${post.slug}`}
        className="blog-card__link"
        aria-label={`Read article: ${post.title}`}
      >
        <div className="blog-card__head">
          <span className="blog-card__label">Article</span>
          <Meta post={post} />
        </div>
        <h2 className="blog-card__title">{post.title}</h2>
        {post.excerpt && <p className="blog-card__excerpt">{post.excerpt}</p>}
        <span className="blog-card__cta">
          Read article
          <span aria-hidden>→</span>
        </span>
      </Link>
    </article>
  );
}

function PinnedCard({ post }) {
  return (
    <article className="blog-card blog-card--pinned">
      <Link
        to={`/blog/${post.slug}`}
        className="blog-card__link"
        aria-label={`Pinned article: ${post.title}`}
      >
        <div className="blog-card__head">
          <span className="blog-card__label">Pinned</span>
          <Meta post={post} />
        </div>
        <h2 className="blog-card__title">{post.title}</h2>
        {post.excerpt && <p className="blog-card__excerpt">{post.excerpt}</p>}
        <span className="blog-card__cta">
          Read article
          <span aria-hidden>→</span>
        </span>
      </Link>
    </article>
  );
}

const BlogList = () => {
  const { posts, loading, error } = useBlogPosts();
  const blogListingSchema = useMemo(() => buildBlogListingSchema(), []);

  const { pinned, articles } = useMemo(() => {
    const pinnedPosts = posts.filter((post) => post.pinned);
    const articlePosts = posts.filter((post) => !post.pinned);
    return { pinned: pinnedPosts, articles: articlePosts };
  }, [posts]);

  return (
    <>
      <Seo
        title={PAGE_SEO.blog.title}
        description={PAGE_SEO.blog.description}
        path={PAGE_SEO.blog.path}
        jsonLd={blogListingSchema}
      />
      <SectionPage
        eyebrow="Writing"
        title="Blog"
        subtitle="Technical notes and essays on software engineering, systems design, and lessons from building in production."
      >
        <section className="blog-page">
          <div className="blog-page__inner">
            {loading && <p className="blog-status">Loading articles…</p>}
            {error && (
              <p className="blog-status blog-status--error">{error}</p>
            )}

            {!loading && !error && posts.length === 0 && (
              <p className="blog-status">New articles will appear here soon.</p>
            )}

            {!loading && !error && posts.length > 0 && (
              <div className="blog-cards">
                <p className="blog-cards__count">
                  {posts.length}{' '}
                  {posts.length === 1 ? 'article' : 'articles'}
                </p>

                {pinned.length > 0 && (
                  <section className="blog-pinned" aria-label="Pinned articles">
                    <div className="blog-section-head">
                      <h2 className="blog-section-head__title">Pinned</h2>
                      <p className="blog-section-head__meta">
                        {pinned.length}{' '}
                        {pinned.length === 1 ? 'note' : 'notes'}
                      </p>
                    </div>

                    <ul
                      className={
                        pinned.length === 1
                          ? 'blog-pinned__grid blog-pinned__grid--solo'
                          : 'blog-pinned__grid'
                      }
                    >
                      {pinned.map((post, index) => (
                        <li
                          key={post.slug}
                          className="blog-cards__cell"
                          style={{ '--blog-i': index }}
                        >
                          <PinnedCard post={post} />
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                {articles.length > 0 && (
                  <section className="blog-articles" aria-label="All articles">
                    {pinned.length > 0 && (
                      <div className="blog-section-head">
                        <h2 className="blog-section-head__title">Articles</h2>
                        <p className="blog-section-head__meta">
                          {articles.length}{' '}
                          {articles.length === 1 ? 'post' : 'posts'}
                        </p>
                      </div>
                    )}

                    <ul className="blog-cards__grid">
                      {articles.map((post, index) => (
                        <li
                          key={post.slug}
                          className="blog-cards__cell"
                          style={{ '--blog-i': pinned.length + index }}
                        >
                          <ArticleCard post={post} />
                        </li>
                      ))}
                    </ul>
                  </section>
                )}
              </div>
            )}
          </div>
        </section>
      </SectionPage>
    </>
  );
};

export default BlogList;
