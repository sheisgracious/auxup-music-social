# AuxUp

AuxUp is a real-time social music listening web application where users can create or join rooms, vote on what song plays next, and chat while listening together.

The goal is to recreate the experience of sharing the aux in a group setting, but in an online, interactive, and real-time environment.

---

## Features

### Core Functionality
- Create and join listening rooms (public or private)
- Live "now playing" track display
- Real-time voting system with dynamic queue reordering
- Collaborative song queue

### Social Features
- Real-time chat within rooms
- Public room discovery with "now playing" previews
- Listener counts and live room status

### User Flow
- Join rooms using a code
- Browse public rooms
- Authenticated dashboard for creating or joining rooms

---

## Tech Stack

Frontend:
- React + Vite

Backend:
- Node.js + Express
- Socket.io for real-time communication

Database:
- PostgreSQL (Supabase)

APIs:
- Spotify API (search and metadata)

Deployment:
- Vercel (frontend)
- Railway (backend)

---

## Architecture Overview

AuxUp is designed as a real-time event-driven system.

- Clients connect to the server using WebSockets (Socket.io)
- Users join room-specific channels
- Events are broadcast to all users in a room:
  - vote_song
  - add_song
  - chat_message

The server is responsible for:
- Maintaining room state
- Tracking votes
- Managing queue order

The queue is dynamically reordered based on votes and synchronized across all connected clients.

---

## MVP Scope

The initial version focuses on:

- Room creation and joining
- Real-time voting
- Queue synchronization
- Basic chat functionality

External integrations such as Spotify playback are introduced after core real-time functionality is stable.

---

## Getting Started

### Clone the repository
```bash
git clone https://github.com/sheisgracious/auxup-music-social.git
cd auxup-music-social
```

### Install dependencies
```bash
npm install
```

### Run the app
```bash
npm run dev
```
