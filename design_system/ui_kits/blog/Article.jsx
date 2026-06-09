// Reading view — the article itself, the system's centerpiece.
function Article({ post, onBack, onOpen }) {
  const { Avatar, Divider, Pullquote, Callout } = window;
  const body = window.ARTICLE_BODY;
  const next = window.BLOG_POSTS.filter((p) => p !== post).slice(0, 2);

  return (
    <article style={{ maxWidth: 740, margin: "0 auto", padding: "var(--space-7) var(--gutter-wide) 0" }}>
      <a href="#" onClick={(e) => { e.preventDefault(); onBack(); }}
        style={{ display: "inline-flex", alignItems: "center", gap: "0.4em", fontFamily: "var(--font-meta)", fontSize: "var(--text-2xs)", fontWeight: 600, letterSpacing: "var(--tracking-wider)", textTransform: "uppercase", color: "var(--text-faint)", textDecoration: "none", marginBottom: "var(--space-7)" }}>
        <Icon name="arrow-left" size={14} /> All essays
      </a>

      {/* Header */}
      <div style={{ fontFamily: "var(--font-meta)", fontSize: "var(--text-2xs)", fontWeight: 600, letterSpacing: "var(--tracking-wider)", textTransform: "uppercase", color: "var(--text-faint)", display: "flex", gap: "0.9em", marginBottom: "var(--space-4)" }}>
        <span style={{ color: "var(--accent)" }}>{post.kicker}</span>
        <span>{post.date}</span>
        <span>{"\u00b7 " + post.readingTime}</span>
      </div>
      <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-2xl)", lineHeight: "var(--leading-tight)", letterSpacing: "var(--tracking-tight)", fontWeight: 400, color: "var(--text-strong)", margin: 0, maxWidth: "var(--measure-wide)", textWrap: "balance" }}>{post.title}</h1>
      <p style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-md)", lineHeight: "var(--leading-relaxed)", color: "var(--text-muted)", margin: "var(--space-4) 0 0", maxWidth: "var(--measure)", textWrap: "pretty" }}>{post.standfirst}</p>

      {/* Byline */}
      <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", margin: "var(--space-6) 0", paddingBottom: "var(--space-6)", borderBottom: "1px solid var(--border-hairline)" }}>
        <Avatar initials="TS" size={40} />
        <div>
          <div style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-sm)", color: "var(--text-body)" }}>Thomas Scrace</div>
          <div style={{ fontFamily: "var(--font-meta)", fontSize: "var(--text-2xs)", letterSpacing: "var(--tracking-wide)", textTransform: "uppercase", color: "var(--text-faint)" }}>Reader &amp; writer</div>
        </div>
      </div>

      {/* Body */}
      <div className="prose" style={{ maxWidth: "var(--measure)" }}>
        {body.map((b, i) => {
          if (b.type === "p") return <p key={i} className={b.dropcap ? "dropcap" : undefined} dangerouslySetInnerHTML={{ __html: b.html }} />;
          if (b.type === "h2") return <h2 key={i}>{b.text}</h2>;
          if (b.type === "quote") return <Pullquote key={i} cite={b.cite}>{b.text}</Pullquote>;
          if (b.type === "callout") return <Callout key={i} label={b.label}>{b.text}</Callout>;
          if (b.type === "divider") return <Divider key={i} ornament />;
          return null;
        })}
      </div>

      {/* Tags */}
      <div style={{ display: "flex", gap: "0.6em", marginTop: "var(--space-7)", paddingTop: "var(--space-6)", borderTop: "1px solid var(--border-hairline)" }}>
        {post.tags.map((t) => (
          <span key={t} style={{ fontFamily: "var(--font-meta)", fontSize: "var(--text-2xs)", fontWeight: 600, letterSpacing: "var(--tracking-wide)", textTransform: "uppercase", color: "var(--text-faint)" }}>{t}</span>
        ))}
      </div>

      {/* Read next */}
      <div style={{ marginTop: "var(--space-8)" }}>
        <div style={{ fontFamily: "var(--font-meta)", fontSize: "var(--text-2xs)", fontWeight: 600, letterSpacing: "var(--tracking-wider)", textTransform: "uppercase", color: "var(--text-faint)", marginBottom: "var(--space-2)" }}>Read next</div>
        {next.map((p) => <window.ArticleCard key={p.id} post={p} onOpen={onOpen} />)}
      </div>
    </article>
  );
}

window.Article = Article;
