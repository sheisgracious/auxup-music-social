import { useParams } from "react-router-dom";
import "./Room.css";

export default function Room() {
  const { id } = useParams();

  return (
    <main className="room-page">
      <div className="room-shell">
        {/* Header */}
        <header className="room-header">
          <div>
            <p className="room-label">Room</p>
            <h1 className="room-title">{id}</h1>
          </div>

          <div className="room-header-actions">
            <button className="secondary-button">Share</button>
          </div>
        </header>

        {/* Layout */}
        <section className="room-grid">
          {/* LEFT */}
          <div className="room-main">
            {/* Now Playing */}
            <article className="card now-playing-card">
              <p className="section-label">Now Playing</p>

              <div className="empty-state">
                <p>No song playing</p>
                <span>Add a track to start the room</span>
              </div>
            </article>

            {/* Search */}
            <article className="card search-card">
              <div className="card-header">
                <div>
                  <h2 className="section-title">Add a song</h2>
                  <p className="section-subtitle">
                    Search Spotify and add to queue
                  </p>
                </div>
              </div>

              <div className="search-bar">
                <input
                  type="text"
                  placeholder="Search by song or artist"
                  className="search-input"
                />
                <button className="primary-button">Search</button>
              </div>

              <div className="search-results empty-state">
                <p>No results</p>
              </div>
            </article>

            {/* Queue */}
            <article className="card queue-card">
              <div className="card-header">
                <h2 className="section-title">Queue</h2>
              </div>

              <div className="queue-list empty-state">
                <p>No songs yet</p>
                <span>Search and add tracks to build the queue</span>
              </div>
            </article>
          </div>

          {/* RIGHT */}
          <aside className="room-sidebar">
            <div className="card chat-card">
              <h2 className="section-title">Chat</h2>

              <div className="chat-messages empty-state">
                <p>No messages yet</p>
              </div>

              <div className="chat-input-row">
                <input
                  type="text"
                  placeholder="Send a message"
                  className="chat-input"
                />
                <button className="primary-button">Send</button>
              </div>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
