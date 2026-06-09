// Home / index view — intro, featured essay, tag filter, post list.
function Home({ onOpen }) {
  const { Tag, ArticleCard } = window;
  const posts = window.BLOG_POSTS;
  const featured = posts.find((p) => p.featured) || posts[0];
  const rest = posts.filter((p) => p !== featured);
  const [filter, setFilter] = React.useState("all");
  const allTags = ["all", ...Array.from(new Set(posts.flatMap((p) => p.tags)))];
  const shown = filter === "all" ? rest : rest.filter((p) => p.tags.includes(filter));

  return (
    <div style={{ maxWidth: 740, margin: "0 auto", padding: "var(--space-9) var(--gutter-wide) 0" }}>
      {/* Intro */}
      <p style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-md)", lineHeight: "var(--leading-relaxed)", color: "var(--text-muted)", maxWidth: "var(--measure)", margin: 0, textWrap: "pretty" }}>
        Essays and notes on reading, attention, and the slow web — by
        <span style={{ color: "var(--text-strong)", fontStyle: "italic" }}> Thomas Scrace</span>. Updated when there is
        something worth saying, and not before.
      </p>

      {/* Featured */}
      <a href="#" onClick={(e) => { e.preventDefault(); onOpen(featured); }}
        style={{ display: "block", textDecoration: "none", marginTop: "var(--space-8)", paddingBottom: "var(--space-7)", borderBottom: "1px solid var(--border-hairline)" }}>
        <div style={{ fontFamily: "var(--font-meta)", fontSize: "var(--text-2xs)", fontWeight: 600, letterSpacing: "var(--tracking-wider)", textTransform: "uppercase", color: "var(--text-faint)", display: "flex", gap: "0.9em", marginBottom: "var(--space-4)" }}>
          <span style={{ color: "var(--accent)" }}>Latest</span>
          <span>{featured.kicker}</span>
          <span>{"\u00b7 " + featured.date}</span>
          <span>{"\u00b7 " + featured.readingTime}</span>
        </div>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-3xl)", lineHeight: "var(--leading-tight)", letterSpacing: "var(--tracking-tight)", fontWeight: 400, color: "var(--text-strong)", margin: 0, textWrap: "balance" }}>{featured.title}</h1>
        <p style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-md)", lineHeight: "var(--leading-relaxed)", color: "var(--text-muted)", margin: "var(--space-4) 0 0", maxWidth: "var(--measure)", textWrap: "pretty" }}>{featured.standfirst}</p>
        <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4em", fontFamily: "var(--font-meta)", fontSize: "var(--text-2xs)", fontWeight: 600, letterSpacing: "var(--tracking-wider)", textTransform: "uppercase", color: "var(--accent)", marginTop: "var(--space-5)" }}>
          Read the essay <Icon name="arrow-up-right" size={14} />
        </span>
      </a>

      {/* Filter */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5em", margin: "var(--space-7) 0 var(--space-2)" }}>
        {allTags.map((t) => (
          <Tag key={t} active={filter === t} onClick={() => setFilter(t)}>{t}</Tag>
        ))}
      </div>

      {/* List */}
      <div>
        {shown.map((p) => <ArticleCard key={p.id} post={p} onOpen={onOpen} />)}
      </div>
    </div>
  );
}

window.Home = Home;
