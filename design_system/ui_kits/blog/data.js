// Sample content for the blog UI kit — fictional essays by Thomas Scrace.
window.BLOG_POSTS = [
  {
    id: "stillness",
    kicker: "Essay",
    date: "9 June 2026",
    readingTime: "7 min",
    title: "On stillness & attention",
    standfirst:
      "What we lose when we never let a thought finish — and the quiet discipline of reading something all the way through.",
    tags: ["essays", "reading"],
    featured: true,
  },
  {
    id: "marginalia",
    kicker: "Notebook",
    date: "28 May 2026",
    readingTime: "4 min",
    title: "In praise of marginalia",
    standfirst:
      "A book is a conversation, and the margins are where you get to answer back. Notes on reading with a pencil in hand.",
    tags: ["reading", "notebook"],
  },
  {
    id: "slow-web",
    kicker: "Essay",
    date: "14 May 2026",
    readingTime: "9 min",
    title: "The case for a slower web",
    standfirst:
      "Not everything needs to be infinite, instant, and optimised. An argument for pages that simply sit still and wait to be read.",
    tags: ["essays", "the web"],
  },
  {
    id: "georgia",
    kicker: "Notebook",
    date: "2 May 2026",
    readingTime: "5 min",
    title: "Why I still set everything in Georgia",
    standfirst:
      "A short defence of a humble, ubiquitous typeface — and what it teaches about working with what you already have.",
    tags: ["typography", "notebook"],
  },
  {
    id: "rereading",
    kicker: "Essay",
    date: "19 April 2026",
    readingTime: "6 min",
    title: "On re-reading",
    standfirst:
      "The book hasn't changed; you have. What we find the second time, and the third, in the same unmoving sentences.",
    tags: ["essays", "reading"],
  },
];

// The body of the featured essay, used by the reading view.
window.ARTICLE_BODY = [
  { type: "p", dropcap: true, html: "There is a particular kind of quiet that a long paragraph asks for. Not silence exactly — a room can be noisy and still hold it — but a willingness to stay with one thought until it has finished saying what it came to say. We have, most of us, slowly traded that quiet for something faster and thinner, and we have done it without quite deciding to." },
  { type: "p", html: "I notice it most when I sit down to read something I have been meaning to read for weeks. The first paragraph goes well. By the second, a small, familiar restlessness arrives — a sense that there must be something else, somewhere, more urgently requiring my attention. There never is. The restlessness is the point; it is the residue of a hundred small interruptions, each one teaching me that attention is a thing to be spent quickly and moved on from." },
  { type: "h2", text: "The discipline of finishing" },
  { type: "p", html: "To read something all the way through is, increasingly, a discipline rather than a default. It asks you to trust that the writer has put the paragraphs in this order for a reason, and that the reward is at the end and not the beginning. It is the opposite of the skim, which assumes the value is a nugget to be extracted and the rest mere packaging." },
  { type: "quote", text: "The only thing required of a reader is attention.", cite: "Marilynne Robinson" },
  { type: "p", html: "I keep that line near my desk. It is generous and it is demanding in equal measure. Generous, because it asks for nothing you do not already have. Demanding, because attention turns out to be the hardest thing to give — harder than agreement, harder than praise." },
  { type: "callout", label: "Note", text: "An earlier and shorter version of this essay first appeared in the notebook, under another title." },
  { type: "h2", text: "Where this leaves us" },
  { type: "p", html: "None of this is an argument against speed, exactly. It is an argument for keeping a place — a page, an hour, a habit — where speed is not the measure. A place that simply sits still and waits to be read. This site is my attempt at one." },
  { type: "divider" },
  { type: "p", html: "If you have read this far, then you have, for a few minutes, done the thing the essay is about. That is the whole of it. Thank you for the attention; I know what it costs." },
];
