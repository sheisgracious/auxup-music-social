export default function Navbar() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "18px 32px",
        background: "rgba(251,249,247,0.88)",
        backdropFilter: "blur(14px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div
        style={{
          fontFamily: "Syne, sans-serif",
          fontWeight: 800,
          fontSize: "22px",
          letterSpacing: "-0.04em",
          color: "var(--text)",
          cursor: "pointer",
        }}
      >
        aux<span style={{ color: "var(--accent)" }}>up</span>
      </div>

      <button
        style={{
          background: "transparent",
          border: "1px solid var(--border-2)",
          color: "var(--text)",
          borderRadius: "var(--radius-pill)",
          padding: "10px 22px",
          fontFamily: "DM Sans, sans-serif",
          fontWeight: 600,
          fontSize: "14px",
          cursor: "pointer",
        }}
      >
        Sign in
      </button>
    </nav>
  );
}
