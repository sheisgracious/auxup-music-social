import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

let spotifyToken = null;
let spotifyTokenExpiresAt = 0;

async function getSpotifyAccessToken() {
  const now = Date.now();

  if (spotifyToken && now < spotifyTokenExpiresAt) {
    return spotifyToken;
  }

  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    throw new Error(
      "Missing Spotify client credentials in environment variables.",
    );
  }

  const creds = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${creds}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "client_credentials",
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Spotify token error: ${errorText}`);
  }

  const data = await response.json();

  spotifyToken = data.access_token;
  spotifyTokenExpiresAt = now + (data.expires_in - 60) * 1000;

  return spotifyToken;
}

app.get("/api/search", async (req, res) => {
  try {
    const q = req.query.q;

    if (!q || !q.trim()) {
      return res.status(400).json({ error: "Missing search query." });
    }

    const token = await getSpotifyAccessToken();

    const spotifyRes = await fetch(
      `https://api.spotify.com/v1/search?${new URLSearchParams({
        q,
        type: "track",
        limit: "10",
      })}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (!spotifyRes.ok) {
      const errorText = await spotifyRes.text();
      throw new Error(`Spotify search error: ${errorText}`);
    }

    const data = await spotifyRes.json();

    const tracks = (data.tracks?.items || []).map((track) => ({
      id: track.id,
      name: track.name,
      artist: track.artists?.map((a) => a.name).join(", "),
      album: track.album?.name,
      image: track.album?.images?.[0]?.url || "",
      uri: track.uri,
      externalUrl: track.external_urls?.spotify || "",
      previewUrl: track.preview_url,
    }));

    res.json({ tracks });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to search Spotify." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
