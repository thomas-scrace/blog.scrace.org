// About view — portrait monogram, bio prose, contact.
function About() {
  const { Avatar, Divider, Button } = window;
  return (
    <div style={{ maxWidth: 740, margin: "0 auto", padding: "var(--space-9) var(--gutter-wide) 0" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "var(--space-5)", marginBottom: "var(--space-7)" }}>
        <Avatar initials="TS" size={76} />
        <div>
          <div style={{ fontFamily: "var(--font-meta)", fontSize: "var(--text-2xs)", fontWeight: 600, letterSpacing: "var(--tracking-wider)", textTransform: "uppercase", color: "var(--accent)", marginBottom: "var(--space-2)" }}>About</div>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-2xl)", lineHeight: "var(--leading-tight)", letterSpacing: "var(--tracking-tight)", fontWeight: 400, color: "var(--text-strong)", margin: 0 }}>Thomas Scrace</h1>
        </div>
      </div>

      <div className="prose">
        <p className="lead">I write essays and keep a notebook here — mostly about reading, attention, and the quiet virtues of a slower web. This is a personal site: no analytics worth the name, no newsletter funnel, no growth strategy. Just pages, set in Georgia, meant to be read.</p>
        <p>By day I work with words and software. By evening I read, and sometimes I write down what the reading left me with. The pieces here are unhurried by design. Some are short notes; a few are longer essays I have been turning over for months.</p>
        <Divider ornament />
        <p>If something here is useful, or wrong, or worth arguing with, I would genuinely like to hear it. The best correspondence I get comes from people who read all the way to the end.</p>
      </div>

      <div style={{ display: "flex", gap: "var(--space-3)", marginTop: "var(--space-7)" }}>
        <Button variant="primary" href="#"><Icon name="mail" size={16} /> Write to me</Button>
        <Button variant="secondary" href="#"><Icon name="rss" size={16} /> Subscribe</Button>
      </div>
    </div>
  );
}

window.About = About;
