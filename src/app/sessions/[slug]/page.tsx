'use client';

import { sessions } from '@/data/sessions';

export default function SessionPage({ params }: { params: { slug: string } }) {
  const session = sessions.find((s) => s.slug === params.slug);

  if (!session) {
    return (
      <div className="container">
        <h1>Session not found</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="back-link">
        <a href="/">← Back to Sessions</a>
      </div>

      {/* Vimeo Video Player */}
            {/* @ts-ignore */}
            {/* @ts-ignore */}
            {session.vimeoUrl && (
                <div className="vimeo-player">
          <iframe 
            width="100%" 
            height="400" 
                        src={session.vimeoUrl}
            frameBorder="0" 
                        allow="autoplay; fullscreen; picture-in-picture"
          />
        </div>
      )}

      {/* Compact Tracklist */}
      <div className="tracklist-compact">
        {session.tracks.map((track, index) => (
          <div key={index} className="track-row">
            <div className="track-number">#{index + 1}</div>
            <div className="track-info">
              <div className="track-title">{track.title}</div>
              <div className="track-meta">
                {track.artist} | {track.bpm} BPM | {track.key} | {track.duration}
              </div>
            </div>
            <a
              href={`https://open.spotify.com/search/${encodeURIComponent(
                `${track.title} ${track.artist}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="spotify-link"
            >
              ♫
            </a>
          </div>
        ))}
      </div>

      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          color: #e0e0e0;
        }

        .back-link {
          margin-bottom: 20px;
        }

        .back-link a {
          color: #00d9ff;
          text-decoration: none;
          font-family: 'Courier New', monospace;
          transition: color 0.3s;
        }

        .back-link a:hover {
          color: #ffff00;
        }

        .mixcloud-player {
          margin-bottom: 40px;
          border: 2px solid #ffff00;
          padding: 0;
          overflow: hidden;
        }

        .mixcloud-player iframe {
          display: block;
        }

        .tracklist-compact {
          border: 2px solid #ffff00;
          background: rgba(0, 0, 0, 0.5);
        }

        .track-row {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 12px 15px;
          border-bottom: 1px solid #333;
          transition: background 0.2s;
        }

        .track-row:last-child {
          border-bottom: none;
        }

        .track-row:hover {
          background: rgba(255, 255, 0, 0.1);
        }

        .track-number {
          color: #ffff00;
          font-weight: bold;
          font-family: 'Courier New', monospace;
          min-width: 40px;
          font-size: 0.9em;
        }

        .track-info {
          flex: 1;
        }

        .track-title {
          color: #ffff00;
          font-family: 'Courier New', monospace;
          font-size: 1em;
          margin-bottom: 4px;
        }

        .track-meta {
          color: #00d9ff;
          font-family: 'Courier New', monospace;
          font-size: 0.85em;
        }

        .spotify-link {
          color: #1DB954;
          font-size: 1.5em;
          text-decoration: none;
          transition: transform 0.2s;
          display: flex;
          align-items: center;
          padding: 5px;
        }

        .spotify-link:hover {
          transform: scale(1.2);
        }

        @media (max-width: 768px) {
          .track-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }

          .track-number {
            min-width: auto;
          }
        }
      `}</style>
    </div>
  );
}
