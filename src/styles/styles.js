export const styles = {
  /* ===== ROOT CONTAINER ===== */
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",   // 🔥 critical fix
    paddingTop: 16,
    width: "100%",
    maxWidth: "100%",
    minHeight: "100vh",
    overflowX: "hidden",
    overflowY: "auto",
    fontFamily: `"Courier New", Courier, monospace`,
    letterSpacing: "0.12em"
  },

  /* ===== MAIN GAME SCREEN ===== */
  screen: {
    width: "100%",
    maxWidth: 420,
    border: "4px solid #000",
    padding: 12,
    boxSizing: "border-box",
    fontFamily: "monospace",
    transition: "opacity 1s",
    overflowY: "auto"
  },

  /* ===== BATTLE ROW ===== */
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
    marginBottom: 20,
    width: "100%"
  },

  sprite: {
    width: "100%",
    maxWidth: 100,
    maxHeight: 80,
    objectFit: "contain",
    imageRendering: "pixelated",
    flexShrink: 0
  },

  info: {
    width: "100%",
    flex: 1
  },

  /* ===== HP BAR ===== */
  hpOuter: {
    height: 10,
    border: "2px solid #000",
    background: "#ccc",
    width: "100%",
    boxSizing: "border-box"
  },

  hpInner: {
    height: "100%",
    background: "#4caf50",
    transition: "width 0.3s"
  },

  /* ===== TEXT BOX ===== */
  textBox: {
    border: "3px solid #000",
    padding: 10,
    minHeight: 50,
    marginBottom: 10,
    width: "100%",
    boxSizing: "border-box",
    wordBreak: "break-word",
    overflowWrap: "break-word"
  },

  /* ===== MOVES ===== */
  moves: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 8,
    width: "95%",
    borderRadius: 6
  },

  button: {
  padding: 8,
  border: "2px solid #000",
  cursor: "pointer",
  textAlign: "center",
  userSelect: "none",
  background: "#f5f5f5"
},

  /* ===== SELECTION SCREEN ===== */
  selectionWrapper: {
    textAlign: "center",
    width: "100%"
  },

  /* Header ABOVE grid (image + title) */
  selectionHeader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 16,
    width: "100%",
    flexShrink: 0
  },

  headerImage: {
    width: "100%",
    maxWidth: 180,
    height: "auto",
    imageRendering: "pixelated"
  },

  headerTitle: {
    marginTop: 8,
    marginBottom: 8,
    fontSize: "clamp(14px, 4vw, 20px)",
    textAlign: "center"
  },

  /* Grid adapts to screen width */
  selectionGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(90px, 1fr))",
    gap: 12,
    width: "100%",
    boxSizing: "border-box"
  },

  /* Selection card */
  selectCard: {
    width: "100%",
    aspectRatio: "1 / 1",
    border: "2px solid #000",
    background: "#f5f5f5",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 6,
    boxSizing: "border-box",
    overflow: "hidden"
  },

  selectSprite: {
    width: "100%",
    maxHeight: "60%",
    objectFit: "contain",
    imageRendering: "pixelated",
    flexShrink: 0
  },

  selectName: {
    fontWeight: "bold",
    fontSize: "clamp(10px, 3vw, 14px)",
    textAlign: "center",
    lineHeight: 1.1,
    maxWidth: "100%",
    wordBreak: "break-word",
    overflowWrap: "break-word"
  },

  /* ===== EFFECTS ===== */
  flicker: {
    animation: "flicker 0.3s linear 3"
  }
};