/* @ds-bundle: {"format":3,"namespace":"ThomasScraceDesignSystem_b4656d","components":[{"name":"ArticleCard","sourcePath":"components/content/ArticleCard.jsx"},{"name":"Callout","sourcePath":"components/content/Callout.jsx"},{"name":"Pullquote","sourcePath":"components/content/Pullquote.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/content/ArticleCard.jsx":"ecd665bf0553","components/content/Callout.jsx":"a1676dc6ac5c","components/content/Pullquote.jsx":"8fca5ccdac30","components/core/Avatar.jsx":"f36aba2aeb6e","components/core/Badge.jsx":"39eab7be5553","components/core/Button.jsx":"7ec0eb7007f4","components/core/Divider.jsx":"a7eb1b8440a4","components/core/Tag.jsx":"3d9dfd9c1f60","ui_kits/blog/About.jsx":"5fd9f395d108","ui_kits/blog/App.jsx":"b46899cc31e0","ui_kits/blog/Article.jsx":"f32d4c6fac3b","ui_kits/blog/Chrome.jsx":"4d3e03e9e48a","ui_kits/blog/Home.jsx":"51ed8044a9ba","ui_kits/blog/atoms.jsx":"81b026e0d92a","ui_kits/blog/data.js":"dd3b2fc23fd6"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ThomasScraceDesignSystem_b4656d = window.ThomasScraceDesignSystem_b4656d || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/ArticleCard.jsx
try { (() => {
/**
 * ArticleCard — a post preview for index/archive lists. Eyebrow
 * meta, serif title, standfirst, and a tag row. Hover lifts the
 * title to gilt; no card chrome by default (list-like), optional
 * bordered surface.
 */
function ArticleCard({
  title,
  href = "#",
  standfirst,
  date,
  readingTime,
  kicker,
  tags = [],
  bordered = false
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "block",
      textDecoration: "none",
      padding: bordered ? "var(--space-5)" : "var(--space-5) 0",
      borderRadius: bordered ? "var(--radius-lg)" : 0,
      border: bordered ? "1px solid var(--border-hairline)" : "none",
      background: bordered && hover ? "var(--surface-raised)" : "transparent",
      borderBottom: bordered ? undefined : "1px solid var(--border-hairline)",
      transition: "background var(--duration) var(--ease-standard)"
    }
  }, (kicker || date || readingTime) && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-meta)",
      fontSize: "var(--text-2xs)",
      fontWeight: 600,
      letterSpacing: "var(--tracking-wider)",
      textTransform: "uppercase",
      color: "var(--text-faint)",
      display: "flex",
      gap: "0.9em",
      alignItems: "center",
      marginBottom: "var(--space-3)"
    }
  }, kicker && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)"
    }
  }, kicker), date && /*#__PURE__*/React.createElement("span", null, date), readingTime && /*#__PURE__*/React.createElement("span", null, "\xB7 ", readingTime)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: "var(--text-xl)",
      lineHeight: "var(--leading-snug)",
      letterSpacing: "var(--tracking-tight)",
      fontWeight: "var(--weight-regular)",
      color: hover ? "var(--accent)" : "var(--text-strong)",
      transition: "color var(--duration) var(--ease-standard)",
      margin: 0,
      textWrap: "balance"
    }
  }, title), standfirst && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: "var(--text-base)",
      lineHeight: "var(--leading-relaxed)",
      color: "var(--text-muted)",
      margin: "var(--space-3) 0 0",
      maxWidth: "var(--measure)",
      textWrap: "pretty"
    }
  }, standfirst), tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "0.5em",
      marginTop: "var(--space-4)"
    }
  }, tags.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      fontFamily: "var(--font-meta)",
      fontSize: "var(--text-2xs)",
      fontWeight: 600,
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase",
      color: "var(--text-faint)"
    }
  }, t))));
}
Object.assign(__ds_scope, { ArticleCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ArticleCard.jsx", error: String((e && e.message) || e) }); }

// components/content/Callout.jsx
try { (() => {
/**
 * Callout — a quiet aside set apart from the prose: a note, an
 * epigraph, an editorial mark. Left gilt rule, raised surface.
 */
function Callout({
  children,
  label,
  tone = "note"
}) {
  const tones = {
    note: "var(--gilt-500)",
    warn: "var(--terra-500)",
    quiet: "var(--sage-500)"
  };
  const rule = tones[tone] || tones.note;
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      margin: "var(--space-6) 0",
      padding: "var(--space-4) var(--space-5)",
      background: "var(--surface-raised)",
      borderLeft: `2px solid ${rule}`,
      borderRadius: "0 var(--radius-md) var(--radius-md) 0",
      maxWidth: "var(--measure)"
    }
  }, label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-meta)",
      fontSize: "var(--text-2xs)",
      fontWeight: 600,
      letterSpacing: "var(--tracking-wider)",
      textTransform: "uppercase",
      color: "var(--text-faint)",
      marginBottom: "var(--space-2)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: "var(--text-sm)",
      lineHeight: "var(--leading-relaxed)",
      color: "var(--text-muted)"
    }
  }, children));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Callout.jsx", error: String((e && e.message) || e) }); }

// components/content/Pullquote.jsx
try { (() => {
/**
 * Pullquote — a large serif quotation lifted from the prose.
 * Italic, generous, with an optional attribution. Gilt opening mark.
 */
function Pullquote({
  children,
  cite,
  align = "left"
}) {
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: "var(--space-8) 0",
      textAlign: align,
      maxWidth: "var(--measure-wide)"
    }
  }, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      position: "relative",
      fontFamily: "var(--font-serif)",
      fontStyle: "italic",
      fontSize: "var(--text-xl)",
      lineHeight: "var(--leading-snug)",
      letterSpacing: "var(--tracking-tight)",
      color: "var(--text-strong)",
      textWrap: "balance"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: "var(--accent)",
      fontSize: "1.1em",
      marginRight: "0.08em"
    }
  }, "\u201C"), children, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: "var(--accent)"
    }
  }, "\u201D")), cite && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontFamily: "var(--font-meta)",
      fontSize: "var(--text-2xs)",
      fontWeight: 600,
      letterSpacing: "var(--tracking-wider)",
      textTransform: "uppercase",
      color: "var(--text-faint)",
      marginTop: "var(--space-4)"
    }
  }, cite));
}
Object.assign(__ds_scope, { Pullquote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Pullquote.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
/**
 * Avatar — the author's portrait or monogram. Subtle gilt ring.
 * Falls back to serif initials on the raised surface.
 */
function Avatar({
  src,
  alt = "",
  initials,
  size = 44,
  ring = true
}) {
  const dim = typeof size === "number" ? `${size}px` : size;
  const common = {
    width: dim,
    height: dim,
    borderRadius: "var(--radius-pill)",
    flex: "none",
    boxShadow: ring ? "0 0 0 1px var(--gilt-500)" : "none",
    objectFit: "cover",
    display: "block"
  };
  if (src) {
    return /*#__PURE__*/React.createElement("img", {
      src: src,
      alt: alt,
      style: common
    });
  }
  return /*#__PURE__*/React.createElement("span", {
    "aria-label": alt || initials,
    style: {
      ...common,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--surface-raised)",
      color: "var(--accent)",
      fontFamily: "var(--font-serif)",
      fontSize: `calc(${dim} * 0.42)`,
      lineHeight: 1,
      userSelect: "none"
    }
  }, initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — a tiny status/marker label. Inline with headings or meta.
 * Tones map to the restrained semantic palette.
 */
function Badge({
  children,
  tone = "neutral",
  ...rest
}) {
  const tones = {
    neutral: {
      color: "var(--text-muted)",
      border: "var(--border-hairline)",
      bg: "var(--surface-sunken)"
    },
    accent: {
      color: "var(--gilt-300)",
      border: "var(--gilt-500)",
      bg: "var(--accent-wash)"
    },
    warn: {
      color: "var(--terra-400)",
      border: "var(--terra-500)",
      bg: "rgba(192,106,78,0.12)"
    },
    quiet: {
      color: "var(--sage-400)",
      border: "var(--sage-500)",
      bg: "rgba(138,160,129,0.12)"
    }
  };
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      fontFamily: "var(--font-meta)",
      fontSize: "var(--text-2xs)",
      fontWeight: 600,
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase",
      padding: "2px 8px",
      borderRadius: "var(--radius-sm)",
      border: `1px solid ${t.border}`,
      color: t.color,
      background: t.bg,
      display: "inline-flex",
      alignItems: "center",
      lineHeight: 1.4,
      ...rest.style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — the brand's primary action control.
 * Serif label, modest radius, gilt fill for primary. No bounce; a
 * calm color/opacity shift on interaction.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  href,
  onClick,
  type = "button",
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const sizes = {
    sm: {
      padding: "6px 14px",
      fontSize: "var(--text-sm)"
    },
    md: {
      padding: "9px 20px",
      fontSize: "var(--text-base)"
    },
    lg: {
      padding: "13px 28px",
      fontSize: "var(--text-md)"
    }
  };
  const palette = {
    primary: {
      base: {
        background: "var(--gilt-400)",
        color: "var(--ink-900)",
        border: "1px solid var(--gilt-400)"
      },
      hover: {
        background: "var(--gilt-300)",
        borderColor: "var(--gilt-300)"
      },
      active: {
        background: "var(--gilt-500)",
        borderColor: "var(--gilt-500)"
      }
    },
    secondary: {
      base: {
        background: "transparent",
        color: "var(--text-body)",
        border: "1px solid var(--border-strong)"
      },
      hover: {
        background: "var(--surface-hover)",
        borderColor: "var(--parchment-500)"
      },
      active: {
        background: "var(--surface-sunken)"
      }
    },
    ghost: {
      base: {
        background: "transparent",
        color: "var(--accent)",
        border: "1px solid transparent"
      },
      hover: {
        background: "var(--accent-wash)"
      },
      active: {
        background: "var(--surface-sunken)"
      }
    }
  };
  const p = palette[variant] || palette.primary;
  const style = {
    fontFamily: "var(--font-serif)",
    fontWeight: "var(--weight-regular)",
    lineHeight: 1,
    letterSpacing: "0.005em",
    borderRadius: "var(--radius-md)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    transition: "background var(--duration) var(--ease-standard), border-color var(--duration) var(--ease-standard), color var(--duration) var(--ease-standard)",
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5em",
    textDecoration: "none",
    whiteSpace: "nowrap",
    ...sizes[size],
    ...p.base,
    ...(!disabled && hover ? p.hover : null),
    ...(!disabled && active ? p.active : null)
  };
  const handlers = disabled ? {} : {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    onClick
  };
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      style: style
    }, handlers, rest), children);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    style: style
  }, handlers, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
/**
 * Divider — a section break. Plain hairline, or an ornamental
 * centered mark (asterism / fleuron) for literary section breaks.
 */
function Divider({
  ornament = false,
  symbol = "❧",
  style
}) {
  if (ornament) {
    return /*#__PURE__*/React.createElement("div", {
      role: "separator",
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.1em",
        color: "var(--text-faint)",
        margin: "var(--space-7) 0",
        ...style
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        height: 1,
        width: 48,
        background: "var(--border-hairline)"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: "var(--text-lg)",
        color: "var(--accent)",
        lineHeight: 1
      }
    }, symbol), /*#__PURE__*/React.createElement("span", {
      style: {
        height: 1,
        width: 48,
        background: "var(--border-hairline)"
      }
    }));
  }
  return /*#__PURE__*/React.createElement("hr", {
    style: {
      border: 0,
      height: 1,
      background: "var(--border-hairline)",
      margin: "var(--space-6) 0",
      ...style
    }
  });
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — a small topic label for posts. Sans micro-type, tracked,
 * lowercase by convention. Quiet by default; gilt when active.
 */
function Tag({
  children,
  active = false,
  href,
  onClick,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const style = {
    fontFamily: "var(--font-meta)",
    fontSize: "var(--text-2xs)",
    fontWeight: 600,
    letterSpacing: "var(--tracking-wide)",
    textTransform: "uppercase",
    padding: "4px 10px",
    borderRadius: "var(--radius-pill)",
    border: "1px solid",
    cursor: href || onClick ? "pointer" : "default",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    transition: "background var(--duration) var(--ease-standard), border-color var(--duration) var(--ease-standard), color var(--duration) var(--ease-standard)",
    color: active ? "var(--ink-900)" : "var(--text-muted)",
    background: active ? "var(--gilt-400)" : hover ? "var(--accent-wash)" : "transparent",
    borderColor: active ? "var(--gilt-400)" : hover ? "var(--gilt-500)" : "var(--border-hairline)"
  };
  const Comp = href ? "a" : onClick ? "button" : "span";
  return /*#__PURE__*/React.createElement(Comp, _extends({
    href: href,
    onClick: onClick,
    style: style,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// ui_kits/blog/About.jsx
try { (() => {
// About view — portrait monogram, bio prose, contact.
function About() {
  const {
    Avatar,
    Divider,
    Button
  } = window;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 740,
      margin: "0 auto",
      padding: "var(--space-9) var(--gutter-wide) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-5)",
      marginBottom: "var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: "TS",
    size: 76
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-meta)",
      fontSize: "var(--text-2xs)",
      fontWeight: 600,
      letterSpacing: "var(--tracking-wider)",
      textTransform: "uppercase",
      color: "var(--accent)",
      marginBottom: "var(--space-2)"
    }
  }, "About"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: "var(--text-2xl)",
      lineHeight: "var(--leading-tight)",
      letterSpacing: "var(--tracking-tight)",
      fontWeight: 400,
      color: "var(--text-strong)",
      margin: 0
    }
  }, "Thomas Scrace"))), /*#__PURE__*/React.createElement("div", {
    className: "prose"
  }, /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "I write essays and keep a notebook here \u2014 mostly about reading, attention, and the quiet virtues of a slower web. This is a personal site: no analytics worth the name, no newsletter funnel, no growth strategy. Just pages, set in Georgia, meant to be read."), /*#__PURE__*/React.createElement("p", null, "By day I work with words and software. By evening I read, and sometimes I write down what the reading left me with. The pieces here are unhurried by design. Some are short notes; a few are longer essays I have been turning over for months."), /*#__PURE__*/React.createElement(Divider, {
    ornament: true
  }), /*#__PURE__*/React.createElement("p", null, "If something here is useful, or wrong, or worth arguing with, I would genuinely like to hear it. The best correspondence I get comes from people who read all the way to the end.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      marginTop: "var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    href: "#"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 16
  }), " Write to me"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    href: "#"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "rss",
    size: 16
  }), " Subscribe")));
}
window.About = About;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/blog/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/blog/App.jsx
try { (() => {
// App — simple client-side router for the blog UI kit.
function App() {
  const {
    Masthead,
    Footer,
    Home,
    Article,
    About
  } = window;
  const [view, setView] = React.useState("home");
  const [post, setPost] = React.useState(null);
  React.useEffect(() => {
    if (window.scrollTo) window.scrollTo(0, 0);
  }, [view, post]);
  const openPost = p => {
    setPost(p);
    setView("article");
  };
  const navigate = id => {
    if (id === "about") setView("about");else {
      setPost(null);
      setView("home");
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement(Masthead, {
    view: view,
    onNavigate: navigate
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1
    }
  }, view === "home" && /*#__PURE__*/React.createElement(Home, {
    onOpen: openPost
  }), view === "article" && post && /*#__PURE__*/React.createElement(Article, {
    post: post,
    onBack: () => navigate("home"),
    onOpen: openPost
  }), view === "about" && /*#__PURE__*/React.createElement(About, null)), /*#__PURE__*/React.createElement(Footer, {
    onNavigate: navigate
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/blog/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/blog/Article.jsx
try { (() => {
// Reading view — the article itself, the system's centerpiece.
function Article({
  post,
  onBack,
  onOpen
}) {
  const {
    Avatar,
    Divider,
    Pullquote,
    Callout
  } = window;
  const body = window.ARTICLE_BODY;
  const next = window.BLOG_POSTS.filter(p => p !== post).slice(0, 2);
  return /*#__PURE__*/React.createElement("article", {
    style: {
      maxWidth: 740,
      margin: "0 auto",
      padding: "var(--space-7) var(--gutter-wide) 0"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onBack();
    },
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.4em",
      fontFamily: "var(--font-meta)",
      fontSize: "var(--text-2xs)",
      fontWeight: 600,
      letterSpacing: "var(--tracking-wider)",
      textTransform: "uppercase",
      color: "var(--text-faint)",
      textDecoration: "none",
      marginBottom: "var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 14
  }), " All essays"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-meta)",
      fontSize: "var(--text-2xs)",
      fontWeight: 600,
      letterSpacing: "var(--tracking-wider)",
      textTransform: "uppercase",
      color: "var(--text-faint)",
      display: "flex",
      gap: "0.9em",
      marginBottom: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)"
    }
  }, post.kicker), /*#__PURE__*/React.createElement("span", null, post.date), /*#__PURE__*/React.createElement("span", null, "\u00b7 " + post.readingTime)), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: "var(--text-2xl)",
      lineHeight: "var(--leading-tight)",
      letterSpacing: "var(--tracking-tight)",
      fontWeight: 400,
      color: "var(--text-strong)",
      margin: 0,
      maxWidth: "var(--measure-wide)",
      textWrap: "balance"
    }
  }, post.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: "var(--text-md)",
      lineHeight: "var(--leading-relaxed)",
      color: "var(--text-muted)",
      margin: "var(--space-4) 0 0",
      maxWidth: "var(--measure)",
      textWrap: "pretty"
    }
  }, post.standfirst), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      margin: "var(--space-6) 0",
      paddingBottom: "var(--space-6)",
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: "TS",
    size: 40
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: "var(--text-sm)",
      color: "var(--text-body)"
    }
  }, "Thomas Scrace"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-meta)",
      fontSize: "var(--text-2xs)",
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase",
      color: "var(--text-faint)"
    }
  }, "Reader & writer"))), /*#__PURE__*/React.createElement("div", {
    className: "prose",
    style: {
      maxWidth: "var(--measure)"
    }
  }, body.map((b, i) => {
    if (b.type === "p") return /*#__PURE__*/React.createElement("p", {
      key: i,
      className: b.dropcap ? "dropcap" : undefined,
      dangerouslySetInnerHTML: {
        __html: b.html
      }
    });
    if (b.type === "h2") return /*#__PURE__*/React.createElement("h2", {
      key: i
    }, b.text);
    if (b.type === "quote") return /*#__PURE__*/React.createElement(Pullquote, {
      key: i,
      cite: b.cite
    }, b.text);
    if (b.type === "callout") return /*#__PURE__*/React.createElement(Callout, {
      key: i,
      label: b.label
    }, b.text);
    if (b.type === "divider") return /*#__PURE__*/React.createElement(Divider, {
      key: i,
      ornament: true
    });
    return null;
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "0.6em",
      marginTop: "var(--space-7)",
      paddingTop: "var(--space-6)",
      borderTop: "1px solid var(--border-hairline)"
    }
  }, post.tags.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      fontFamily: "var(--font-meta)",
      fontSize: "var(--text-2xs)",
      fontWeight: 600,
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase",
      color: "var(--text-faint)"
    }
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-meta)",
      fontSize: "var(--text-2xs)",
      fontWeight: 600,
      letterSpacing: "var(--tracking-wider)",
      textTransform: "uppercase",
      color: "var(--text-faint)",
      marginBottom: "var(--space-2)"
    }
  }, "Read next"), next.map(p => /*#__PURE__*/React.createElement(window.ArticleCard, {
    key: p.id,
    post: p,
    onOpen: onOpen
  }))));
}
window.Article = Article;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/blog/Article.jsx", error: String((e && e.message) || e) }); }

// ui_kits/blog/Chrome.jsx
try { (() => {
// Lucide icon helper + masthead + footer for the blog UI kit.
const {
  useEffect
} = React;
function Icon({
  name,
  size = 18,
  color = "currentColor",
  stroke = 1.5,
  style
}) {
  const ref = React.useRef(null);
  useEffect(() => {
    if (window.lucide && ref.current) {
      ref.current.innerHTML = "";
      const el = document.createElement("i");
      el.setAttribute("data-lucide", name);
      ref.current.appendChild(el);
      window.lucide.createIcons({
        attrs: {
          width: size,
          height: size,
          "stroke-width": stroke,
          color
        },
        nameAttr: "data-lucide"
      });
    }
  }, [name, size, color, stroke]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: "inline-flex",
      alignItems: "center",
      ...style
    }
  });
}
function Masthead({
  view,
  onNavigate
}) {
  const links = [{
    id: "home",
    label: "Essays"
  }, {
    id: "notebook",
    label: "Notebook"
  }, {
    id: "reading",
    label: "Reading"
  }, {
    id: "about",
    label: "About"
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 10,
      background: "color-mix(in srgb, var(--surface-page) 88%, transparent)",
      backdropFilter: "blur(6px)",
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 980,
      margin: "0 auto",
      padding: "0 var(--gutter-wide)",
      height: 68,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate("home");
    },
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: "var(--text-lg)",
      color: "var(--text-strong)",
      textDecoration: "none",
      letterSpacing: "var(--tracking-tight)",
      display: "flex",
      alignItems: "baseline",
      gap: "0.5em"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic"
    }
  }, "Thomas Scrace")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-5)"
    }
  }, links.map(l => {
    const active = view === "article" && l.id === "home" || view === l.id;
    return /*#__PURE__*/React.createElement("a", {
      key: l.id,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate(l.id);
      },
      style: {
        fontFamily: "var(--font-meta)",
        fontSize: "var(--text-2xs)",
        fontWeight: 600,
        letterSpacing: "var(--tracking-wider)",
        textTransform: "uppercase",
        color: active ? "var(--accent)" : "var(--text-faint)",
        textDecoration: "none",
        transition: "color var(--duration) var(--ease-standard)"
      },
      onMouseEnter: e => {
        if (!active) e.target.style.color = "var(--text-muted)";
      },
      onMouseLeave: e => {
        if (!active) e.target.style.color = "var(--text-faint)";
      }
    }, l.label);
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 18,
      background: "var(--border-hairline)"
    }
  }), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    title: "Search",
    style: {
      color: "var(--text-faint)",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search"
  })), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    title: "RSS",
    style: {
      color: "var(--text-faint)",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "rss"
  })))));
}
function Footer({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: "1px solid var(--border-hairline)",
      marginTop: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 980,
      margin: "0 auto",
      padding: "var(--space-7) var(--gutter-wide)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-serif)",
      fontStyle: "italic",
      fontSize: "var(--text-base)",
      color: "var(--text-muted)"
    }
  }, "Thomas Scrace", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-meta)",
      fontStyle: "normal",
      fontSize: "var(--text-2xs)",
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase",
      color: "var(--text-faint)",
      marginLeft: "1em"
    }
  }, "Written & set in Georgia, by lamplight.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-5)"
    }
  }, ["RSS", "Email", "Index"].map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => {
      e.preventDefault();
      if (l === "Index") onNavigate("home");
    },
    style: {
      fontFamily: "var(--font-meta)",
      fontSize: "var(--text-2xs)",
      fontWeight: 600,
      letterSpacing: "var(--tracking-wider)",
      textTransform: "uppercase",
      color: "var(--text-faint)",
      textDecoration: "none"
    }
  }, l)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-meta)",
      fontSize: "var(--text-2xs)",
      letterSpacing: "var(--tracking-wide)",
      color: "var(--parchment-500)"
    }
  }, "\xA9 2026"))));
}
Object.assign(window, {
  Icon,
  Masthead,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/blog/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/blog/Home.jsx
try { (() => {
// Home / index view — intro, featured essay, tag filter, post list.
function Home({
  onOpen
}) {
  const {
    Tag,
    ArticleCard
  } = window;
  const posts = window.BLOG_POSTS;
  const featured = posts.find(p => p.featured) || posts[0];
  const rest = posts.filter(p => p !== featured);
  const [filter, setFilter] = React.useState("all");
  const allTags = ["all", ...Array.from(new Set(posts.flatMap(p => p.tags)))];
  const shown = filter === "all" ? rest : rest.filter(p => p.tags.includes(filter));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 740,
      margin: "0 auto",
      padding: "var(--space-9) var(--gutter-wide) 0"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: "var(--text-md)",
      lineHeight: "var(--leading-relaxed)",
      color: "var(--text-muted)",
      maxWidth: "var(--measure)",
      margin: 0,
      textWrap: "pretty"
    }
  }, "Essays and notes on reading, attention, and the slow web \u2014 by", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-strong)",
      fontStyle: "italic"
    }
  }, " Thomas Scrace"), ". Updated when there is something worth saying, and not before."), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onOpen(featured);
    },
    style: {
      display: "block",
      textDecoration: "none",
      marginTop: "var(--space-8)",
      paddingBottom: "var(--space-7)",
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-meta)",
      fontSize: "var(--text-2xs)",
      fontWeight: 600,
      letterSpacing: "var(--tracking-wider)",
      textTransform: "uppercase",
      color: "var(--text-faint)",
      display: "flex",
      gap: "0.9em",
      marginBottom: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)"
    }
  }, "Latest"), /*#__PURE__*/React.createElement("span", null, featured.kicker), /*#__PURE__*/React.createElement("span", null, "\u00b7 " + featured.date), /*#__PURE__*/React.createElement("span", null, "\u00b7 " + featured.readingTime)), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: "var(--text-3xl)",
      lineHeight: "var(--leading-tight)",
      letterSpacing: "var(--tracking-tight)",
      fontWeight: 400,
      color: "var(--text-strong)",
      margin: 0,
      textWrap: "balance"
    }
  }, featured.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: "var(--text-md)",
      lineHeight: "var(--leading-relaxed)",
      color: "var(--text-muted)",
      margin: "var(--space-4) 0 0",
      maxWidth: "var(--measure)",
      textWrap: "pretty"
    }
  }, featured.standfirst), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.4em",
      fontFamily: "var(--font-meta)",
      fontSize: "var(--text-2xs)",
      fontWeight: 600,
      letterSpacing: "var(--tracking-wider)",
      textTransform: "uppercase",
      color: "var(--accent)",
      marginTop: "var(--space-5)"
    }
  }, "Read the essay ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-up-right",
    size: 14
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "0.5em",
      margin: "var(--space-7) 0 var(--space-2)"
    }
  }, allTags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    active: filter === t,
    onClick: () => setFilter(t)
  }, t))), /*#__PURE__*/React.createElement("div", null, shown.map(p => /*#__PURE__*/React.createElement(ArticleCard, {
    key: p.id,
    post: p,
    onOpen: onOpen
  }))));
}
window.Home = Home;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/blog/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/blog/atoms.jsx
try { (() => {
// Kit atoms — token-driven mirrors of the system primitives, used by the
// blog UI kit so it renders standalone. Visuals match components/* exactly.
const {
  useState
} = React;
function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  href
}) {
  const [h, setH] = useState(false);
  const [a, setA] = useState(false);
  const sizes = {
    sm: {
      padding: "6px 14px",
      fontSize: "var(--text-sm)"
    },
    md: {
      padding: "9px 20px",
      fontSize: "var(--text-base)"
    },
    lg: {
      padding: "13px 28px",
      fontSize: "var(--text-md)"
    }
  };
  const pal = {
    primary: {
      base: {
        background: "var(--gilt-400)",
        color: "var(--ink-900)",
        border: "1px solid var(--gilt-400)"
      },
      hover: {
        background: "var(--gilt-300)",
        borderColor: "var(--gilt-300)"
      },
      active: {
        background: "var(--gilt-500)"
      }
    },
    secondary: {
      base: {
        background: "transparent",
        color: "var(--text-body)",
        border: "1px solid var(--border-strong)"
      },
      hover: {
        background: "var(--surface-hover)",
        borderColor: "var(--parchment-500)"
      },
      active: {
        background: "var(--surface-sunken)"
      }
    },
    ghost: {
      base: {
        background: "transparent",
        color: "var(--accent)",
        border: "1px solid transparent"
      },
      hover: {
        background: "var(--accent-wash)"
      },
      active: {
        background: "var(--surface-sunken)"
      }
    }
  }[variant];
  const style = {
    fontFamily: "var(--font-serif)",
    lineHeight: 1,
    borderRadius: "var(--radius-md)",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5em",
    textDecoration: "none",
    whiteSpace: "nowrap",
    transition: "background var(--duration) var(--ease-standard), border-color var(--duration) var(--ease-standard), color var(--duration) var(--ease-standard)",
    ...sizes[size],
    ...pal.base,
    ...(h ? pal.hover : null),
    ...(a ? pal.active : null)
  };
  const Comp = href ? "a" : "button";
  return /*#__PURE__*/React.createElement(Comp, {
    href: href,
    onClick: onClick,
    style: style,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setA(false);
    },
    onMouseDown: () => setA(true),
    onMouseUp: () => setA(false)
  }, children);
}
function Tag({
  children,
  active = false,
  onClick
}) {
  const [h, setH] = useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      fontFamily: "var(--font-meta)",
      fontSize: "var(--text-2xs)",
      fontWeight: 600,
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase",
      padding: "4px 11px",
      borderRadius: "var(--radius-pill)",
      border: "1px solid",
      cursor: "pointer",
      transition: "background var(--duration) var(--ease-standard), border-color var(--duration) var(--ease-standard), color var(--duration) var(--ease-standard)",
      color: active ? "var(--ink-900)" : "var(--text-muted)",
      background: active ? "var(--gilt-400)" : h ? "var(--accent-wash)" : "transparent",
      borderColor: active ? "var(--gilt-400)" : h ? "var(--gilt-500)" : "var(--border-hairline)"
    }
  }, children);
}
function Avatar({
  initials,
  size = 44,
  ring = true
}) {
  const dim = typeof size === "number" ? size + "px" : size;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: dim,
      height: dim,
      borderRadius: "var(--radius-pill)",
      flex: "none",
      boxShadow: ring ? "0 0 0 1px var(--gilt-500)" : "none",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--surface-raised)",
      color: "var(--accent)",
      fontFamily: "var(--font-serif)",
      fontSize: `calc(${dim} * 0.42)`,
      lineHeight: 1,
      userSelect: "none"
    }
  }, initials);
}
function Divider({
  ornament = false,
  symbol = "\u2767",
  style
}) {
  if (!ornament) return /*#__PURE__*/React.createElement("hr", {
    style: {
      border: 0,
      height: 1,
      background: "var(--border-hairline)",
      margin: "var(--space-6) 0",
      ...style
    }
  });
  return /*#__PURE__*/React.createElement("div", {
    role: "separator",
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "1.1em",
      color: "var(--text-faint)",
      margin: "var(--space-8) 0",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      height: 1,
      width: 48,
      background: "var(--border-hairline)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: "var(--text-lg)",
      color: "var(--accent)",
      lineHeight: 1
    }
  }, symbol), /*#__PURE__*/React.createElement("span", {
    style: {
      height: 1,
      width: 48,
      background: "var(--border-hairline)"
    }
  }));
}
function Eyebrow({
  items
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-meta)",
      fontSize: "var(--text-2xs)",
      fontWeight: 600,
      letterSpacing: "var(--tracking-wider)",
      textTransform: "uppercase",
      color: "var(--text-faint)",
      display: "flex",
      gap: "0.9em",
      alignItems: "center"
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      color: i === 0 && it.accent ? "var(--accent)" : "inherit"
    }
  }, i > 0 ? "\u00b7 " : "", it.label)));
}
function ArticleCard({
  post,
  onOpen
}) {
  const [h, setH] = useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onOpen && onOpen(post);
    },
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: "block",
      textDecoration: "none",
      padding: "var(--space-5) 0",
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-meta)",
      fontSize: "var(--text-2xs)",
      fontWeight: 600,
      letterSpacing: "var(--tracking-wider)",
      textTransform: "uppercase",
      color: "var(--text-faint)",
      display: "flex",
      gap: "0.9em",
      marginBottom: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)"
    }
  }, post.kicker), /*#__PURE__*/React.createElement("span", null, post.date), /*#__PURE__*/React.createElement("span", null, "\u00b7 " + post.readingTime)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: "var(--text-xl)",
      lineHeight: "var(--leading-snug)",
      letterSpacing: "var(--tracking-tight)",
      fontWeight: 400,
      color: h ? "var(--accent)" : "var(--text-strong)",
      transition: "color var(--duration) var(--ease-standard)",
      margin: 0,
      textWrap: "balance"
    }
  }, post.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: "var(--text-base)",
      lineHeight: "var(--leading-relaxed)",
      color: "var(--text-muted)",
      margin: "var(--space-3) 0 0",
      maxWidth: "var(--measure)",
      textWrap: "pretty"
    }
  }, post.standfirst), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "0.6em",
      marginTop: "var(--space-4)"
    }
  }, post.tags.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      fontFamily: "var(--font-meta)",
      fontSize: "var(--text-2xs)",
      fontWeight: 600,
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase",
      color: "var(--text-faint)"
    }
  }, t))));
}
function Pullquote({
  children,
  cite
}) {
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: "var(--space-8) 0",
      maxWidth: "var(--measure-wide)"
    }
  }, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: "var(--font-serif)",
      fontStyle: "italic",
      fontSize: "var(--text-xl)",
      lineHeight: "var(--leading-snug)",
      letterSpacing: "var(--tracking-tight)",
      color: "var(--text-strong)",
      textWrap: "balance"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: "var(--accent)",
      fontSize: "1.1em",
      marginRight: "0.06em"
    }
  }, "\u201c"), children, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: "var(--accent)"
    }
  }, "\u201d")), cite && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontFamily: "var(--font-meta)",
      fontSize: "var(--text-2xs)",
      fontWeight: 600,
      letterSpacing: "var(--tracking-wider)",
      textTransform: "uppercase",
      color: "var(--text-faint)",
      marginTop: "var(--space-4)"
    }
  }, cite));
}
function Callout({
  children,
  label
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      margin: "var(--space-6) 0",
      padding: "var(--space-4) var(--space-5)",
      background: "var(--surface-raised)",
      borderLeft: "2px solid var(--gilt-500)",
      borderRadius: "0 var(--radius-md) var(--radius-md) 0",
      maxWidth: "var(--measure)"
    }
  }, label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-meta)",
      fontSize: "var(--text-2xs)",
      fontWeight: 600,
      letterSpacing: "var(--tracking-wider)",
      textTransform: "uppercase",
      color: "var(--text-faint)",
      marginBottom: "var(--space-2)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: "var(--text-sm)",
      lineHeight: "var(--leading-relaxed)",
      color: "var(--text-muted)"
    }
  }, children));
}
Object.assign(window, {
  Button,
  Tag,
  Avatar,
  Divider,
  Eyebrow,
  ArticleCard,
  Pullquote,
  Callout
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/blog/atoms.jsx", error: String((e && e.message) || e) }); }

// ui_kits/blog/data.js
try { (() => {
// Sample content for the blog UI kit — fictional essays by Thomas Scrace.
window.BLOG_POSTS = [{
  id: "stillness",
  kicker: "Essay",
  date: "9 June 2026",
  readingTime: "7 min",
  title: "On stillness & attention",
  standfirst: "What we lose when we never let a thought finish — and the quiet discipline of reading something all the way through.",
  tags: ["essays", "reading"],
  featured: true
}, {
  id: "marginalia",
  kicker: "Notebook",
  date: "28 May 2026",
  readingTime: "4 min",
  title: "In praise of marginalia",
  standfirst: "A book is a conversation, and the margins are where you get to answer back. Notes on reading with a pencil in hand.",
  tags: ["reading", "notebook"]
}, {
  id: "slow-web",
  kicker: "Essay",
  date: "14 May 2026",
  readingTime: "9 min",
  title: "The case for a slower web",
  standfirst: "Not everything needs to be infinite, instant, and optimised. An argument for pages that simply sit still and wait to be read.",
  tags: ["essays", "the web"]
}, {
  id: "georgia",
  kicker: "Notebook",
  date: "2 May 2026",
  readingTime: "5 min",
  title: "Why I still set everything in Georgia",
  standfirst: "A short defence of a humble, ubiquitous typeface — and what it teaches about working with what you already have.",
  tags: ["typography", "notebook"]
}, {
  id: "rereading",
  kicker: "Essay",
  date: "19 April 2026",
  readingTime: "6 min",
  title: "On re-reading",
  standfirst: "The book hasn't changed; you have. What we find the second time, and the third, in the same unmoving sentences.",
  tags: ["essays", "reading"]
}];

// The body of the featured essay, used by the reading view.
window.ARTICLE_BODY = [{
  type: "p",
  dropcap: true,
  html: "There is a particular kind of quiet that a long paragraph asks for. Not silence exactly — a room can be noisy and still hold it — but a willingness to stay with one thought until it has finished saying what it came to say. We have, most of us, slowly traded that quiet for something faster and thinner, and we have done it without quite deciding to."
}, {
  type: "p",
  html: "I notice it most when I sit down to read something I have been meaning to read for weeks. The first paragraph goes well. By the second, a small, familiar restlessness arrives — a sense that there must be something else, somewhere, more urgently requiring my attention. There never is. The restlessness is the point; it is the residue of a hundred small interruptions, each one teaching me that attention is a thing to be spent quickly and moved on from."
}, {
  type: "h2",
  text: "The discipline of finishing"
}, {
  type: "p",
  html: "To read something all the way through is, increasingly, a discipline rather than a default. It asks you to trust that the writer has put the paragraphs in this order for a reason, and that the reward is at the end and not the beginning. It is the opposite of the skim, which assumes the value is a nugget to be extracted and the rest mere packaging."
}, {
  type: "quote",
  text: "The only thing required of a reader is attention.",
  cite: "Marilynne Robinson"
}, {
  type: "p",
  html: "I keep that line near my desk. It is generous and it is demanding in equal measure. Generous, because it asks for nothing you do not already have. Demanding, because attention turns out to be the hardest thing to give — harder than agreement, harder than praise."
}, {
  type: "callout",
  label: "Note",
  text: "An earlier and shorter version of this essay first appeared in the notebook, under another title."
}, {
  type: "h2",
  text: "Where this leaves us"
}, {
  type: "p",
  html: "None of this is an argument against speed, exactly. It is an argument for keeping a place — a page, an hour, a habit — where speed is not the measure. A place that simply sits still and waits to be read. This site is my attempt at one."
}, {
  type: "divider"
}, {
  type: "p",
  html: "If you have read this far, then you have, for a few minutes, done the thing the essay is about. That is the whole of it. Thank you for the attention; I know what it costs."
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/blog/data.js", error: String((e && e.message) || e) }); }

__ds_ns.ArticleCard = __ds_scope.ArticleCard;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.Pullquote = __ds_scope.Pullquote;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Tag = __ds_scope.Tag;

})();
