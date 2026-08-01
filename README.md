# 🎬 Movie Search Website

A responsive movie discovery app built with **React**, **TypeScript**, and the **TMDB API**. Search for movies, browse popular titles, and save your favorites — which persist across sessions.

🔗 **[Live Demo](https://your-site.netlify.app)** &nbsp;•&nbsp; 💻 **[Source Code](https://github.com/yourusername/movie-search-website)**

> Replace the links above with your actual Netlify and GitHub URLs.

---

## ✨ Features

- 🔍 **Search** any movie via the TMDB API
- 🔥 **Popular movies** loaded on the home page
- ❤️ **Favorites** that persist across sessions using `localStorage`
- 🎞️ Movie cards with poster, rating, release year, and overview on hover
- 📱 **Fully responsive** layout with smooth hover animations

---

## 🛠️ Tech Stack

- **React 19** + **TypeScript**
- **Vite** for build tooling and dev server
- **React Router** for client-side navigation
- **Context API** for global favorites state
- **TMDB API** for movie data
- **Netlify** for deployment

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- A free [TMDB API key](https://www.themoviedb.org/settings/api)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/movie-search-website.git
cd movie-search-website

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the project root:

```env
VITE_API_KEY=your_tmdb_api_key_here
```

### Run Locally

```bash
# Start the dev server
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── MovieCard.tsx     # Movie card with favorite toggle
│   └── NavBar.tsx        # Top navigation
├── contexts/
│   └── MovieContext.tsx  # Global favorites state + localStorage
├── pages/
│   ├── Home.tsx          # Search + popular movies
│   └── Favorites.tsx     # Saved favorites
├── services/
│   └── api.ts            # TMDB API calls
├── css/                  # Component styles
└── App.tsx               # Routes + layout
```

---

## 🌐 Deployment

Deployed on **Netlify**. The build command is `npm run build` and the publish directory is `dist`.

> ⚠️ Remember to add `VITE_API_KEY` to your Netlify environment variables
> (Site settings → Environment variables), or the deployed site won't fetch data.

---

## 📝 License

This project is for educational purposes. Movie data provided by [The Movie Database (TMDB)](https://www.themoviedb.org/).
