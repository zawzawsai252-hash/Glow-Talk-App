import { useState } from "react";

export default function App() {
  const [liked, setLiked] = useState(false);
  const [page, setPage] = useState("Home");

  return (
    <div style={styles.app}>
      <header style={styles.header}>
        <b style={styles.logo}>
          Glow<span style={{ color: "#ff4fa3" }}>Talk</span>
        </b>
        <span>🔍</span>
      </header>

      <main style={styles.feed}>
        <section style={styles.video}>
          <div>
            <h3>@GlowUser</h3>
            <p>
              Welcome to Glow Talk ✨
              <br />
              Short Video • Chat • Video Call
            </p>
          </div>

          <div style={styles.actions}>
            <button onClick={() => setLiked(!liked)}>
              {liked ? "❤️" : "🤍"}
            </button>
            <small>{liked ? "1.3K" : "1.2K"}</small>

            <button>💬</button>
            <small>256</small>

            <button>↗️</button>
            <small>Share</small>
          </div>
        </section>

        <section style={styles.video}>
          <div>
            <h3>@GlowCreator</h3>
            <p>
              Make new friends 💕
              <br />
              Chat and share your moments.
            </p>
          </div>

          <div style={styles.actions}>
            <button>❤️</button>
            <small>856</small>
            <button>💬</button>
            <small>104</small>
            <button>↗️</button>
            <small>Share</small>
          </div>
        </section>
      </main>

      <nav style={styles.nav}>
        {["Home", "Discover", "Create", "Chat", "Profile"].map((item) => (
          <button
            key={item}
            onClick={() => setPage(item)}
            style={{
              ...styles.navButton,
              color: page === item ? "#ff4fa3" : "#aaa",
            }}
          >
            <span style={styles.icon}>
              {item === "Home"
                ? "🏠"
                : item === "Discover"
                ? "🔎"
                : item === "Create"
                ? "➕"
                : item === "Chat"
                ? "💬"
                : "👤"}
            </span>
            {item}
          </button>
        ))}
      </nav>
    </div>
  );
}

const styles = {
  app: {
    maxWidth: "480px",
    height: "100vh",
    margin: "auto",
    background: "#111",
    color: "white",
    fontFamily: "Arial, sans-serif",
    overflow: "hidden",
  },

  header: {
    height: "60px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 18px",
  },

  logo: {
    fontSize: "24px",
  },

  feed: {
    height: "calc(100vh - 120px)",
    overflowY: "auto",
    scrollSnapType: "y mandatory",
  },

  video: {
    height: "calc(100vh - 120px)",
    scrollSnapAlign: "start",
    padding: "20px",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    background: "linear-gradient(135deg,#302b63,#24243e)",
  },

  actions: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "5px",
  },

  actionsButton: {
    fontSize: "28px",
  },

  nav: {
    height: "60px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    borderTop: "1px solid #333",
  },

  navButton: {
    background: "none",
    border: "none",
    fontSize: "12px",
    cursor: "pointer",
  },

  icon: {
    display: "block",
    fontSize: "22px",
  },
};