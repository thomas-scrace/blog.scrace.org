// App — simple client-side router for the blog UI kit.
function App() {
  const { Masthead, Footer, Home, Article, About } = window;
  const [view, setView] = React.useState("home");
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    if (window.scrollTo) window.scrollTo(0, 0);
  }, [view, post]);

  const openPost = (p) => { setPost(p); setView("article"); };
  const navigate = (id) => {
    if (id === "about") setView("about");
    else { setPost(null); setView("home"); }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Masthead view={view} onNavigate={navigate} />
      <main style={{ flex: 1 }}>
        {view === "home" && <Home onOpen={openPost} />}
        {view === "article" && post && <Article post={post} onBack={() => navigate("home")} onOpen={openPost} />}
        {view === "about" && <About />}
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
