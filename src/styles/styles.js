/**
 * Pokemon FireRed Battle - Complete Styles
 * Single file with all styles, animations, and theme configuration
 */

// Import Google Font for Press Start 2P
if (typeof document !== 'undefined') {
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap';
  link.rel = 'stylesheet';
  document.head.appendChild(link);

  // Inject global CSS animations
  const style = document.createElement('style');
  style.textContent = `
    @keyframes flicker {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.3; }
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-8px); }
    }

    @keyframes blink {
      0%, 49% { opacity: 1; }
      50%, 100% { opacity: 0; }
    }

    @keyframes buttonPulse {
      0%, 100% { transform: translateY(-1px) scale(1); }
      50% { transform: translateY(-2px) scale(1.02); }
    }

    @keyframes cardEntrance {
      from {
        opacity: 0;
        transform: scale(0.8) translateY(20px);
      }
      to {
        opacity: 1;
        transform: scale(1) translateY(0);
      }
    }

    @keyframes pokemonEntrance {
      0% {
        opacity: 0;
        transform: scale(0.5) translateY(-50px);
      }
      60% {
        opacity: 1;
        transform: scale(1.1) translateY(0);
      }
      100% {
        transform: scale(1) translateY(0);
      }
    }

    @keyframes hitFlash {
      0%, 100% { filter: brightness(1); }
      50% { filter: brightness(2) saturate(2); }
    }

    /* HP Bar color classes */
    .hp-high {
      background: linear-gradient(180deg, #58d854 0%, #40c03c 100%) !important;
    }

    .hp-medium {
      background: linear-gradient(180deg, #f8d030 0%, #f0b800 100%) !important;
    }

    .hp-low {
      background: linear-gradient(180deg, #f83030 0%, #c82828 100%) !important;
    }

    /* Hit flash effect */
    .hit-flash {
      animation: hitFlash 0.2s ease !important;
    }

    /* Selection card animations with stagger */
    .select-card {
      animation: cardEntrance 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
      animation-fill-mode: both;
    }

    .select-card:nth-child(1) { animation-delay: 0.05s; }
    .select-card:nth-child(2) { animation-delay: 0.1s; }
    .select-card:nth-child(3) { animation-delay: 0.15s; }
    .select-card:nth-child(4) { animation-delay: 0.2s; }
    .select-card:nth-child(5) { animation-delay: 0.25s; }
    .select-card:nth-child(6) { animation-delay: 0.3s; }
    .select-card:nth-child(7) { animation-delay: 0.35s; }
    .select-card:nth-child(8) { animation-delay: 0.4s; }

    /* Pokemon entrance */
    .pokemon-enter {
      animation: pokemonEntrance 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) !important;
    }

    /* Button hover animation */
    button:hover:not(:disabled) {
      animation: buttonPulse 0.3s ease;
    }

    /* Text typing effect */
    .text-typing::after {
      content: '▼';
      display: inline-block;
      margin-left: 8px;
      animation: blink 1s step-end infinite;
      font-size: 10px;
    }
  `;
  document.head.appendChild(style);
}

export const styles = {
  /* ===== ROOT CONTAINER ===== */
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 24,
    paddingBottom: 24,
    width: "100%",
    maxWidth: "100%",
    minHeight: "100vh",
    overflowX: "hidden",
    overflowY: "auto",
    fontFamily: `"Press Start 2P", "Courier New", monospace`,
    background: "linear-gradient(135deg, #1a5490 0%, #2d7ab8 50%, #1a5490 100%)",
    backgroundAttachment: "fixed",
    letterSpacing: "0.08em",
    position: "relative",
    
    // Scanline effect for authentic CRT feel
    backgroundImage: `
      linear-gradient(135deg, #1a5490 0%, #2d7ab8 50%, #1a5490 100%),
      repeating-linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.15) 0px,
        transparent 1px,
        transparent 2px,
        rgba(0, 0, 0, 0.15) 3px
      )
    `,
  },

  /* ===== MAIN GAME SCREEN (Game Boy Screen) ===== */
  screen: {
    width: "100%",
    maxWidth: 450,
    background: "#e8f4e8",
    border: "8px solid #2a2a2a",
    borderRadius: 12,
    padding: 16,
    boxSizing: "border-box",
    boxShadow: `
      0 0 0 4px #505050,
      0 0 0 6px #2a2a2a,
      0 8px 24px rgba(0, 0, 0, 0.4),
      inset 0 2px 4px rgba(255, 255, 255, 0.3)
    `,
    fontFamily: `"Press Start 2P", monospace`,
    transition: "opacity 1s ease",
    position: "relative",
    overflow: "hidden",
  },

  /* ===== BATTLE ROW ===== */
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    gap: 12,
    marginBottom: 24,
    width: "100%",
    position: "relative",
  },

  sprite: {
    width: "100%",
    maxWidth: 120,
    maxHeight: 120,
    objectFit: "contain",
    imageRendering: "pixelated",
    flexShrink: 0,
    filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3))",
    transition: "transform 0.1s ease",
  },

  info: {
    width: "100%",
    flex: 1,
    background: "white",
    border: "3px solid #2a2a2a",
    borderRadius: 8,
    padding: 10,
    boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.1)",
  },

  /* ===== HP BAR (Classic Pokemon Style) ===== */
  hpOuter: {
    height: 14,
    border: "3px solid #2a2a2a",
    background: "#f8e8d8",
    width: "100%",
    boxSizing: "border-box",
    borderRadius: 4,
    overflow: "hidden",
    position: "relative",
    boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.2)",
  },

  hpInner: {
    height: "100%",
    background: "linear-gradient(180deg, #58d854 0%, #40c03c 100%)",
    transition: "width 0.5s cubic-bezier(0.4, 0, 0.2, 1), background 0.3s ease",
    boxShadow: "inset 0 -2px 0 rgba(0, 0, 0, 0.2)",
    position: "relative",
  },

  /* ===== TEXT BOX (Classic Pokemon Dialog) ===== */
  textBox: {
    background: "white",
    border: "4px solid #2a2a2a",
    borderRadius: 8,
    padding: 14,
    minHeight: 70,
    marginBottom: 12,
    width: "100%",
    boxSizing: "border-box",
    wordBreak: "break-word",
    overflowWrap: "break-word",
    fontSize: "12px",
    lineHeight: 1.8,
    color: "#2a2a2a",
    boxShadow: `
      inset 0 0 0 2px #f8f8f8,
      0 4px 8px rgba(0, 0, 0, 0.15)
    `,
    position: "relative",
  },

  /* ===== MOVES (Pokemon Move Buttons) ===== */
  moves: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 10,
    width: "100%",
    padding: 8,
    //background: "rgba(255, 255, 255, 0.4)",
    border: "3px solid #2a2a2a",
    borderRadius: 8,
    boxSizing: "border-box",
  },

  button: {
    padding: "12px 10px",
    border: "3px solid #2a2a2a",
    borderRadius: 6,
    cursor: "pointer",
    textAlign: "center",
    userSelect: "none",
    //background: "linear-gradient(180deg, #f8f8f8 0%, #d8d8d8 100%)",
    color: "#ffffff",
    fontSize: "11px",
    fontFamily: `"Press Start 2P", monospace`,
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    lineHeight: 1.4,
    transition: "all 0.15s ease",
    position: "relative",
    boxShadow: `
      0 4px 0 #888,
      0 4px 8px rgba(0, 0, 0, 0.2)
    `,
  },

  /* ===== SELECTION SCREEN ===== */
  selectionWrapper: {
    textAlign: "center",
    width: "100%",
    animation: "fadeIn 0.6s ease",
  },

  selectionHeader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 20,
    width: "100%",
    flexShrink: 0,
  },

  headerImage: {
    width: "100%",
    maxWidth: 200,
    height: "auto",
    imageRendering: "pixelated",
    filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))",
    animation: "bounce 2s ease-in-out infinite",
  },

  headerTitle: {
    marginTop: 16,
    marginBottom: 12,
    fontSize: "clamp(12px, 4vw, 16px)",
    textAlign: "center",
    color: "#2a2a2a",
    textShadow: "2px 2px 0 rgba(255, 255, 255, 0.5)",
    letterSpacing: "0.1em",
  },

  selectionGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
    gap: 14,
    width: "100%",
    boxSizing: "border-box",
  },

  selectCard: {
    width: "100%",
    aspectRatio: "1 / 1",
    border: "3px solid #2a2a2a",
    borderRadius: 8,
    background: "linear-gradient(135deg, #fff 0%, #f0f0f0 100%)",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 8,
    boxSizing: "border-box",
    overflow: "hidden",
    transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
    position: "relative",
    boxShadow: `
      0 4px 0 #888,
      0 4px 8px rgba(0, 0, 0, 0.15)
    `,
  },

  selectSprite: {
    width: "100%",
    maxHeight: "65%",
    objectFit: "contain",
    imageRendering: "pixelated",
    flexShrink: 0,
    filter: "drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.2))",
  },

  selectName: {
    fontWeight: "bold",
    fontSize: "clamp(9px, 3vw, 11px)",
    textAlign: "center",
    lineHeight: 1.3,
    maxWidth: "100%",
    wordBreak: "break-word",
    overflowWrap: "break-word",
    color: "#2a2a2a",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
  },

  /* ===== EFFECTS ===== */
  flicker: {
    animation: "flicker 0.1s linear 4"
  }
};

// Utility function to get HP bar color class
export const getHPColorClass = (hp, maxHp) => {
  const percentage = (hp / maxHp) * 100;
  if (percentage > 50) return 'hp-high';
  if (percentage > 20) return 'hp-medium';
  return 'hp-low';
};
