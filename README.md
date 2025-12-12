# 🎵 SELECTORS (LIVE) - DJ Sessions with Spotify Integration

**SELECTORS (LIVE)** is a modern Next.js web application for showcasing DJ live sessions with integrated Spotify track data, complete track lists, and direct links to listen on Spotify.

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/roberturendezcontreras-eng/selectors-live.git
cd selectors-live

# Install dependencies
npm install

# Create .env.local file
echo 'SPOTIFY_CLIENT_ID=1415a34857384c029e5be7f8969f9595' > .env.local
echo 'SPOTIFY_CLIENT_SECRET=675b62face3f4dc28a673b71de1dc1ef' >> .env.local
echo 'NEXT_PUBLIC_APP_URL=http://localhost:3000' >> .env.local

# Start the development server
npm run dev

# Open http://localhost:3000
```

## 📋 Features

- ⚡ **Live Sessions**: Browse upcoming DJ sessions
- 🎵 **Spotify Integration**: Direct links to listen on Spotify
- 🎨 **Retro Design**: Cyberpunk/80s aesthetic with yellow & cyan colors
- 📱 **Responsive**: Mobile-friendly design
- ⏱️ **Track Lists**: Complete track lists with timestamps & BPM info
- 🔗 **Direct Links**: Click any track to open it on Spotify

## 📁 Project Structure

```
selectors-live/
├── src/
│   ├── app/
│   │   ├── page.tsx (Home page)
│   │   ├── layout.tsx
│   │   ├── globals.css (Design system)
│   │   └── sessions/[slug]/page.tsx (Session detail)
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── SessionCard.tsx
│   │   └── TrackRow.tsx
│   ├── data/
│   │   └── sessions.ts (Session data)
│   └── lib/
│       └── types.ts (TypeScript types)
├── .env.local (Environment variables)
├── package.json
└── tsconfig.json
```

## 🎨 Design System

- **Colors**: #000000 (Black), #FFFF00 (Yellow), #00FFFF (Cyan), #FFFFFF (White)
- **Font**: Courier New (Monospaced)
- **Borders**: 2px solid yellow (#FFFF00)
- **Badges**: Yellow background, black text
- **Buttons**: Yellow border, transparent background, hover effect

## 🔧 Tech Stack

- **Framework**: Next.js 15+ with TypeScript
- **API**: Spotify Web API for track data
- **Styling**: CSS (no Tailwind)
- **Deployment**: Vercel
- **Database**: Optional (data-driven via JSON)

## 📊 Example Session Data

The app includes a complete deep techno session with 34 tracks from artists like:
- Luigi Tozzi
- Recondite
- Mind Against
- Plastikman
- Mark Broom
- And more...

## 🔐 Environment Variables

Create a `.env.local` file with:

```
SPOTIFY_CLIENT_ID=your_client_id
SPOTIFY_CLIENT_SECRET=your_client_secret
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## 🚀 Deployment

Deploy to Vercel:

```bash
npm run build
vercel deploy
```

Or push to GitHub and connect to Vercel for automatic deployments.

## 📝 License

MIT License - feel free to use this project as a template!

## 👤 Author

Robert Urendez  
Created: December 2025
