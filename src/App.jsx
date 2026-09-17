
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