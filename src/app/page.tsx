'use client';

import Link from 'next/link';
import { sessions } from '@/data/sessions';

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="logo-wrapper">
            <h1 className="logo">SELECTORS</h1>
            <span className="version">v1</span>
          </div>
          <p className="subtitle">Electronic Music Sessions</p>
        </div>

        <div className="grid">
          {sessions.map((session) => (
            <Link key={session.id} href={`/sessions/${session.slug}`}>
              <div className="card">
                {session.coverImage && (
                  <img
                    src={session.coverImage}
                    alt={session.title}
                    className="card-image"
                  />
                )}
                <h2 className="card-title">{session.title}</h2>
                <p className="card-meta">DJ: {session.dj}</p>
                <p className="card-date">Date: {session.date}</p>
                <p className="card-description">{session.description}</p>
                <p className="card-tracks">
                  {session.tracks.length} Tracks
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 20px;
          color: #e0e0e0;
        }

        .header {
          text-align: center;
          margin-bottom: 60px;
        }

        .logo-wrapper {
          position: relative;
          display: inline-block;
          margin-bottom: 20px;
        }

        .logo {
          font-size: 5em;
          color: #c6ff00;
          text-shadow: 
            0 0 10px #c6ff00,
            0 0 20px #c6ff00,
            0 0 30px #c6ff00,
            0 0 40px #7cb342;
          font-family: 'Arial Black', 'Arial Bold', sans-serif;
          font-weight: 900;
          letter-spacing: 0.1em;
          margin: 0;
          text-transform: uppercase;
        }

        .version {
          position: absolute;
          top: 10px;
          right: -40px;
          font-size: 1.5em;
          color: #c6ff00;
          font-weight: bold;
        }

        .subtitle {
          font-size: 1.2em;
          color: #00d9ff;
          font-family: 'Courier New', monospace;
          margin: 0;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 30px;
        }

        .card {
          border: 2px solid #ffff00;
          padding: 0;
          cursor: pointer;
          transition: transform 0.3s, box-shadow 0.3s;
          background: rgba(0, 0, 0, 0.5);
          overflow: hidden;
        }

        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 0 20px rgba(255, 255, 0, 0.5);
        }

        .card-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-bottom: 2px solid #ffff00;
        }

        .card-title {
          color: #ffff00;
          margin: 15px 15px 10px;
          font-size: 1.5em;
          font-family: 'Courier New', monospace;
        }

        .card-meta,
        .card-date {
          color: #00d9ff;
          margin: 5px 15px;
          font-family: 'Courier New', monospace;
          font-size: 0.9em;
        }

        .card-description {
          color: #888;
          margin: 10px 15px;
          font-size: 0.9em;
          font-family: 'Courier New', monospace;
        }

        .card-tracks {
          color: #ffff00;
          margin: 10px 15px 15px;
          font-weight: bold;
          font-family: 'Courier New', monospace;
        }

        @media (max-width: 768px) {
          .logo {
            font-size: 3em;
          }

          .grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
