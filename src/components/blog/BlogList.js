import React, { useId, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SectionPage from '../../pages/SectionPage';
import Seo from '../seo/Seo';
import { PAGE_SEO, buildBlogListingSchema } from '../../seo/siteConfig';
import { useBlogPosts } from '../../blog/useBlogPosts';
import { formatDate } from '../../blog/formatDate';
import './Blog.css';

const EASTER_FACTS = [
  'Git stores snapshots, not diffs packfiles compute deltas later purely for storage efficiency.',
  'Spectre showed speculative execution can leak secrets across privilege boundaries with no classic software bug.',
  'Postgres MVCC keeps old row versions so readers don’t block writers on the same row.',
  'TLS 1.3 removed RSA key exchange, so forward secrecy is mandatory rather than optional.',
  'Linux CFS tracks virtual runtime, not simple wall-clock turn-taking, to approximate fairness.',
  'A missing memory barrier can pass every unit test and still corrupt state only on ARM under contention.',
  'NAND flash remaps bad cells in firmware your filesystem often never sees the physical page that died.',
  'CAP is about partitions: if the network splits, you pick consistency or availability, not both.',
  'Unicode’s BOM exists because UTF-16 can’t signal endianness from the code units alone.',
  'DNS TTLs are advisory; busy resolvers routinely clamp or ignore them.',
  'The JVM’s portability is the bytecode hot methods still become CPU-specific machine code via the JIT.',
  'Early Unix networking lore: the best debugger was often still printf, even inside the kernel.',
  'Modern TLC NAND endurance is often a few thousand program/erase cycles per cell, not the old SLC 100k myth.',
  'False sharing can tank a concurrent program when unrelated fields share a cache line and bounce between cores.',
];

function pickRandomFact() {
  return EASTER_FACTS[Math.floor(Math.random() * EASTER_FACTS.length)];
}

/** Drag distance (px) needed to stretch the ribbon fully to the bottom */
const RIBBON_DRAG = 120;
const PULL_OPEN_AT = RIBBON_DRAG * 0.85;

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
  const factId = useId();
  const [open, setOpen] = useState(false);
  const [pull, setPull] = useState(0);
  const [fact, setFact] = useState(() => pickRandomFact());
  const dragRef = useRef({ active: false, startY: 0, moved: false });

  const dragging = pull > 0;
  const ribbonProgress = dragging
    ? Math.min(1, pull / RIBBON_DRAG)
    : open
      ? 1
      : 0;
  const ribbonFull = ribbonProgress >= 0.98;
  const factVisible = open || (dragging && ribbonFull);

  const openEgg = () => {
    setFact(pickRandomFact());
    setOpen(true);
  };

  const endDrag = (clientY) => {
    const { active, startY, moved } = dragRef.current;
    if (!active) return;
    dragRef.current.active = false;

    // Click / tap does nothing — only a real pull opens or closes.
    if (!moved) {
      setPull(0);
      return;
    }

    if (open) {
      const up = startY - clientY;
      setOpen(up < PULL_OPEN_AT * 0.45);
    } else {
      const delta = clientY - startY;
      if (delta >= PULL_OPEN_AT) openEgg();
      else setOpen(false);
    }
    setPull(0);
  };

  const onPointerDown = (event) => {
    event.preventDefault();
    event.stopPropagation();
    dragRef.current = {
      active: true,
      startY: event.clientY,
      moved: false,
    };
    if (open) setPull(RIBBON_DRAG);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event) => {
    if (!dragRef.current.active) return;
    const { startY } = dragRef.current;

    if (open) {
      const up = startY - event.clientY;
      if (Math.abs(up) > 4) dragRef.current.moved = true;
      setPull(Math.max(0, Math.min(RIBBON_DRAG, RIBBON_DRAG - up)));
      return;
    }

    const delta = Math.max(0, Math.min(RIBBON_DRAG, event.clientY - startY));
    if (delta > 4) dragRef.current.moved = true;
    setPull(delta);
  };

  const onPointerUp = (event) => {
    event.preventDefault();
    event.stopPropagation();
    endDrag(event.clientY);
  };

  const onKeyDown = (event) => {
    if (event.key === 'Escape' && open) {
      event.preventDefault();
      setOpen(false);
    }
  };

  return (
    <article
      className={[
        'blog-card',
        'blog-card--pinned',
        ribbonProgress > 0.02 ? 'is-pulled' : '',
        ribbonFull ? 'is-ribbon-full' : '',
        factVisible ? 'is-fact-open' : '',
        dragging ? 'is-dragging' : '',
      ]
        .filter(Boolean)
        .join(' ')}
      style={{ '--ribbon-progress': ribbonProgress.toFixed(4) }}
    >
      <div className="blog-card__shell">
        <button
          type="button"
          className="blog-card__bookmark"
          aria-expanded={open}
          aria-controls={factId}
          aria-label={
            open
              ? 'Pull the bookmark ribbon up to tuck it'
              : 'Pull the bookmark ribbon down for a surprise'
          }
          title={open ? 'Pull up to tuck' : 'Pull down'}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onKeyDown={onKeyDown}
        />

        <div
          id={factId}
          className="blog-card__overlay"
          role="region"
          aria-label="Bookmark surprise"
          aria-hidden={!factVisible}
        >
          <div className="blog-card__overlay-inner">
            <p className="blog-card__easter-label">What you found</p>
            <p className="blog-card__congrats">
              Congratulations you found the 1st easter egg.
            </p>
            <p className="blog-card__easter-label blog-card__easter-label--fact">
              Random fact
            </p>
            <p className="blog-card__fact">{fact}</p>
          </div>
        </div>

        <Link
          to={`/blog/${post.slug}`}
          className="blog-card__link"
          aria-label={`Pinned article: ${post.title}`}
          tabIndex={factVisible ? -1 : undefined}
        >
          <div className="blog-card__head">
            <Meta post={post} />
          </div>
          <h2 className="blog-card__title">{post.title}</h2>
          {post.excerpt && (
            <p className="blog-card__excerpt">{post.excerpt}</p>
          )}
          <span className="blog-card__cta">
            Read article
            <span aria-hidden>→</span>
          </span>
        </Link>
      </div>
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
