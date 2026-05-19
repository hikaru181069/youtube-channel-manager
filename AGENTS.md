# AGENTS.md

## Project Overview

This is a MERN-based YouTube Channel Manager app.

The goal of this project is to help users discover YouTube channels they subscribed to but have not watched recently.

This project is also intended for:

- MERN portfolio development
- learning full-stack architecture
- practicing React + Express + MongoDB integration
- learning practical project structure

Current development stage:

- basic MERN skeleton completed
- backend CRUD partially completed
- frontend fetch completed
- currently implementing frontend features

---

# Tech Stack

## Frontend

- React
- Vite
- JavaScript

## Backend

- Node.js
- Express

## Database

- MongoDB
- Mongoose

---

# Project Structure

txt youtube-app/ ├── backend/ │ ├── config/ │ ├── controllers/ │ ├── models/ │ ├── routes/ │ ├── server.js │ └── test.http │ └── frontend/ └── src/ ├── components/ ├── pages/ ├── services/ ├── App.jsx └── main.jsx

---

# Backend Architecture

Follow this structure:

txt routes ↓ controllers ↓ models ↓ MongoDB

Rules:

- Keep route files small
- Business logic should stay in controllers
- Do not place large logic inside server.js
- Keep code beginner-friendly
- Prefer readability over abstraction

---

# Frontend Architecture

Follow this structure:

txt pages ↓ components ↓ services

## Responsibilities

### pages/

Page-level state management and data fetching.

Example:

- Home.jsx

### components/

Reusable UI components.

Examples:

- ChannelList.jsx
- ChannelCard.jsx

### services/

API communication layer.

Examples:

- channelApi.js

---

# Current Features

Completed:

- Express server
- MongoDB connection
- Channel model
- GET /api/channels
- POST /api/channels
- DELETE /api/channels/:id
- frontend fetch
- frontend channel rendering

---

# Current Channel Model

js { channelId: String, title: String, thumbnailUrl: String, subscriberCount: Number, lastWatchedAt: Date }

---

# Current API

txt GET /api/channels POST /api/channels DELETE /api/channels/:id

---

# Development Rules

## Important

Do NOT over-engineer this project.

This project should stay:

- simple
- readable
- educational
- practical

Avoid:

- unnecessary abstractions
- premature optimization
- advanced patterns too early
- complicated folder structures

---

# Explanation Style

重要な変更を行う時は、日本語で説明してください。

特に：

- React hooks
- useEffect
- props
- state
- Express routing
- MongoDB operations
- async / await
- fetch
- API flow

については、初心者向けに丁寧に説明してください。

コードだけを書いて終わらせず、

- なぜその設計なのか
- Reactの思想
- Expressの役割
- データの流れ

も説明してください。

---

# Current Priorities

Implement features in this order:

1. frontend create channel form
2. frontend delete button
3. loading state
4. error state
5. basic CSS
6. inactive channel filter
7. update feature
8. YouTube API integration
9. Chrome Extension integration

---

# Current Ports

Backend:

txt http://localhost:5003

Frontend:

txt Vite default port

---

# Important Constraints

Do NOT introduce yet:

- TypeScript
- authentication
- Redux
- Zustand
- Next.js
- YouTube OAuth
- Chrome Extension
- Docker
- advanced backend architecture

unless explicitly requested.

---

# Coding Philosophy

Prioritize:

- readability
- separation of responsibility
- practical MERN structure
- maintainability
- beginner-friendly explanations

---

## Future Planned Technologies

This project may introduce the following technologies in later phases:

- Chrome Extension
- YouTube OAuth
- authentication
- TypeScript
- Docker
- Zustand, only if frontend state becomes complex

Do not introduce them in the current MVP phase.

Avoid unless explicitly requested:

- Redux
- Next.js
- advanced backend architecture

This project is intended to become a strong internship portfolio project.
