import { useState, useEffect } from "react";

const ROOMS = [
  {
    name: "late night indie",
    listeners: 24,
    track: "Pyramid Song — Radiohead",
    tags: ["indie", "chill", "alternative"],
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "hip hop only",
    listeners: 41,
    track: "HUMBLE. — Kendrick Lamar",
    tags: ["hip hop", "rap", "vibes"],
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "sunday jazz",
    listeners: 18,
    track: "So What — Miles Davis",
    tags: ["jazz", "relaxed", "focus"],
    image:
      "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=1200&q=80",
  },
];

const FEATURES = [
  {
    icon: "01",
    title: "create a room",
    desc: "Start a public or private session. Share your code with friends or let anyone join.",
  },
  {
    icon: "02",
    title: "vote on what plays",
    desc: "Everyone in the room nominates songs. The queue reorders live based on votes.",
  },
  {
    icon: "03",
    title: "listen together",
    desc: "Full songs, synced for everyone. Chat while you listen. No account needed to browse.",
  },
];

export default function Landing() {
  return (
    <main
      style={{ background: "linear-gradient(180deg,#fbf9f7 0%,#f6f1ee 100%)" }}
    >
      <Hero />
      <LiveRooms />
      <HowItWorks />
      <Footer />
    </main>
  );
}

function Hero() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % ROOMS.length);
        setFading(false);
      }, 400);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const room = ROOMS[current];

  return (
    <section
      style={{
        maxWidth: "1220px",
        margin: "0 auto",
        padding: "52px 32px 80px",
        minHeight: "calc(100vh - 78px)",
        display: "grid",
        gridTemplateColumns: "1.08fr 0.92fr",
        gap: "42px",
        alignItems: "center",
      }}
    >
      {/* Left */}
      <div>
        <h1
          style={{
            fontSize: "clamp(56px, 8vw, 92px)",
            margin: "0 0 18px",
            maxWidth: "680px",
          }}
        >
          share the aux, together
        </h1>
        <p
          style={{
            fontSize: "20px",
            lineHeight: 1.55,
            color: "var(--muted)",
            maxWidth: "520px",
            marginBottom: "32px",
          }}
        >
          Create a room, vote on what plays next, and listen with people who
          actually have taste.
        </p>

        {/* Code input */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            background: "#fff",
            border: "1px solid var(--border-2)",
            borderRadius: "999px",
            padding: "8px 8px 8px 20px",
            width: "min(520px, 100%)",
            boxShadow: "var(--shadow)",
            marginBottom: "14px",
          }}
        >
          <input
            placeholder="enter room code..."
            style={{
              flex: 1,
              background: "transparent",
              border: "none",
              outline: "none",
              color: "var(--text)",
              fontSize: "15px",
              letterSpacing: "0.04em",
              fontFamily: "DM Sans, sans-serif",
            }}
          />
          <button
            style={{
              background:
                "linear-gradient(135deg, var(--accent), var(--accent-2))",
              color: "#fff",
              border: "none",
              borderRadius: "999px",
              padding: "11px 22px",
              fontWeight: 600,
              fontSize: "14px",
              fontFamily: "DM Sans, sans-serif",
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            join room
          </button>
        </div>

        <button
          style={{
            background: "#fff",
            border: "1px solid var(--border-2)",
            borderRadius: "999px",
            padding: "12px 24px",
            fontWeight: 700,
            fontSize: "15px",
            fontFamily: "DM Sans, sans-serif",
            cursor: "pointer",
            color: "var(--text)",
          }}
        >
          create a room
        </button>
      </div>

      {/* Right — rotating room card */}
      <div
        style={{
          background: "#fff",
          border: "1px solid var(--border)",
          borderRadius: "30px",
          padding: "18px",
          boxShadow: "var(--shadow)",
        }}
      >
        <div
          style={{
            height: "500px",
            borderRadius: "22px",
            overflow: "hidden",
            position: "relative",
            backgroundImage: `url(${room.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: fading ? "opacity 0.4s ease" : "none",
            opacity: fading ? 0 : 1,
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(18,12,12,0.02) 22%, rgba(18,12,12,0.68) 100%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: "22px",
              right: "22px",
              bottom: "22px",
              color: "#fff",
              zIndex: 1,
            }}
          >
            <h3 style={{ fontSize: "40px", marginBottom: "6px" }}>
              {room.name}
            </h3>
            <p
              style={{
                color: "rgba(255,255,255,0.78)",
                marginBottom: "14px",
                fontSize: "15px",
              }}
            >
              {room.listeners} listening · {room.track}
            </p>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {room.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    padding: "7px 13px",
                    borderRadius: "999px",
                    background: "rgba(255,255,255,0.14)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    fontSize: "13px",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Dots indicator */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "6px",
            marginTop: "14px",
          }}
        >
          {ROOMS.map((_, i) => (
            <div
              key={i}
              style={{
                width: i === current ? "20px" : "6px",
                height: "6px",
                borderRadius: "999px",
                background: i === current ? "var(--accent)" : "var(--border-2)",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function LiveRooms() {
  const rooms = [
    {
      name: "hip hop only",
      tag: "HIP HOP",
      listeners: 41,
      track: "HUMBLE.",
      artist: "Kendrick Lamar",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "late night indie",
      tag: "INDIE",
      listeners: 24,
      track: "Pyramid Song",
      artist: "Radiohead",
      image:
        "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "sunday jazz",
      tag: "JAZZ",
      listeners: 18,
      track: "So What",
      artist: "Miles Davis",
      image:
        "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "deep focus",
      tag: "AMBIENT",
      listeners: 33,
      track: "Strobe",
      artist: "deadmau5",
      image:
        "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section
      style={{ maxWidth: "1220px", margin: "0 auto", padding: "0 32px 80px" }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          marginBottom: "24px",
        }}
      >
        <div>
          <p
            style={{
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "var(--muted)",
              fontWeight: 700,
              marginBottom: "6px",
            }}
          >
            live now
          </p>
          <h2 style={{ fontSize: "34px" }}>rooms you can join</h2>
        </div>
        <button
          style={{
            background: "transparent",
            border: "1px solid var(--border-2)",
            borderRadius: "999px",
            padding: "10px 20px",
            fontFamily: "DM Sans, sans-serif",
            fontWeight: 600,
            fontSize: "14px",
            cursor: "pointer",
            color: "var(--muted)",
          }}
        >
          see all rooms
        </button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
          gap: "16px",
        }}
      >
        {rooms.map((room) => (
          <div
            key={room.name}
            style={{
              borderRadius: "22px",
              overflow: "hidden",
              border: "1px solid var(--border)",
              background: "#fff",
              boxShadow: "var(--shadow)",
              cursor: "pointer",
              transition: "transform 0.18s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-3px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <div
              style={{
                height: "182px",
                backgroundImage: `url(${room.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(22,12,12,0.78) 0%, transparent 58%)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "16px",
                }}
              >
                <p
                  style={{
                    fontSize: "11px",
                    letterSpacing: "0.1em",
                    color: "#ff8d8d",
                    fontWeight: 700,
                    marginBottom: "4px",
                  }}
                >
                  {room.tag}
                </p>
                <h4
                  style={{
                    color: "#fff",
                    fontSize: "17px",
                    fontFamily: "Syne, sans-serif",
                  }}
                >
                  {room.name}
                </h4>
              </div>
            </div>
            <div
              style={{
                padding: "12px 14px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: "12px",
                    color: "var(--muted)",
                    lineHeight: 1.4,
                  }}
                >
                  now playing
                  <br />
                  <strong style={{ color: "var(--text)" }}>
                    {room.track}
                  </strong>{" "}
                  · {room.artist}
                </p>
              </div>
              <p
                style={{
                  fontSize: "12px",
                  color: "var(--muted)",
                  whiteSpace: "nowrap",
                }}
              >
                <span
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    background: "#179c52",
                    display: "inline-block",
                    marginRight: "5px",
                  }}
                />
                {room.listeners}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section
      style={{ maxWidth: "1220px", margin: "0 auto", padding: "0 32px 100px" }}
    >
      <div style={{ marginBottom: "32px" }}>
        <p
          style={{
            fontSize: "12px",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            color: "var(--muted)",
            fontWeight: 700,
            marginBottom: "6px",
          }}
        >
          how it works
        </p>
        <h2 style={{ fontSize: "34px" }}>built for the aux debate</h2>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: "16px",
        }}
      >
        {FEATURES.map((f) => (
          <div
            key={f.icon}
            style={{
              background: "#fff",
              border: "1px solid var(--border)",
              borderRadius: "22px",
              padding: "28px",
              boxShadow: "var(--shadow)",
            }}
          >
            <div
              style={{
                width: "46px",
                height: "46px",
                borderRadius: "14px",
                background: "var(--soft)",
                color: "var(--accent)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "Syne, sans-serif",
                fontWeight: 800,
                fontSize: "16px",
                marginBottom: "16px",
              }}
            >
              {f.icon}
            </div>
            <h3 style={{ fontSize: "22px", marginBottom: "10px" }}>
              {f.title}
            </h3>
            <p
              style={{
                color: "var(--muted)",
                lineHeight: 1.6,
                fontSize: "15px",
              }}
            >
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "28px 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        maxWidth: "1220px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          fontFamily: "Syne, sans-serif",
          fontWeight: 800,
          fontSize: "18px",
          letterSpacing: "-0.04em",
        }}
      >
        aux<span style={{ color: "var(--accent)" }}>up</span>
      </div>
      <p style={{ color: "var(--muted)", fontSize: "13px" }}>
         · {new Date().getFullYear()}
      </p>
    </footer>
  );
}
