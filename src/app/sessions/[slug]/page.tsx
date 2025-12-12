'use client';

import { sessions } from '@/data/sessions';
import { useState, useEffect } from 'react';

const TrackCard = ({ track, artist }: { track: string; artist: string }) => {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrackImage = async () => {
      try {
        const response = await fetch(
          `/api/search-track?q=${encodeURIComponent(track)}&artist=${encodeURIComponent(artist)}`
        );
        const data = await response.json();
        setImage(data.image);
      } catch (error) {
        console.error('Error fetching track image:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrackImage();
  }, [track, artist]);

  return (
    <div className="track-card-container">
      {loading ? (
        <div className="album-placeholder">
          <div className="placeholder-skeleton">Loading...</div>
        </div>
      ) : image ? (
        <div className="album-artwork">
          <img src={image} alt={`${track} - ${artist}`} />
        </div>
      ) : (
        <div className="album-placeholder">
          <div className="placeholder-icon">♪</div>
        </div>
      )}
    </div>
  );
};

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

      <h1 className="session-title">{session.title}</h1>
      <p className="session-meta">DJ: {session.dj}</p>
      <p className="session-date">Date: {session.date}</p>

      <div className="session-image-container">
        <img src={session.image} alt={session.title} className="session-image" />
      </div>

      <div className="session-description">
        {session.description}
      </div>

      <h2 className="tracklist-title">Tracklist ({session.tracks.length} Tracks)</h2>

      <div className="tracks-grid">
        {session.tracks.map((track, index) => (
          <div key={index} className="track-item">
            <TrackCard track={track.name} artist={track.artist} />
            <div className="track-info">
              <h3 className="track-number">#{index + 1} {track.name}</h3>
              <p className="track-artist">by {track.artist}</p>
              <p className="track-details">
                {track.bpm} BPM | Key: {track.key} | Duration: {track.duration}
              </p>
              <a
                href={`https://open.spotify.com/search/${encodeURIComponent(
                  `${track.name} ${track.artist}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="spotify-button"
              >
                Open in Spotify
              </a>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 40px 20px;
          color: #e0e0e0;
        }

        .back-link {
          margin-bottom: 30px;
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

        .session-title {
          font-size: 3em;
          color: #ffff00;
          text-shadow: 0 0 20px rgba(255, 255, 0, 0.5);
          margin-bottom: 20px;
          font-family: 'Courier New', monospace;
        }

        .session-meta,
        .session-date {
          color: #00d9ff;
          font-family: 'Courier New', monospace;
          margin-bottom: 10px;
        }

        .session-image-container {
          border: 3px solid #ffff00;
          margin: 30px 0;
          overflow: hidden;
        }

        .session-image {
          width: 100%;
          height: auto;
          display: block;
        }

        .session-description {
          border: 2px solid #ffff00;
          padding: 20px;
          color: #ffff00;
          margin-bottom: 30px;
          font-family: 'Courier New', monospace;
        }

        .tracklist-title {
          font-size: 2em;
          color: #ffff00;
          font-family: 'Courier New', monospace;
          margin-bottom: 30px;
        }

        .tracks-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 25px;
          margin-bottom: 40px;
        }

        .track-item {
          border: 2px solid #ffff00;
          padding: 0;
          overflow: hidden;
          transition: transform 0.3s, box-shadow 0.3s;
          background: rgba(0, 0, 0, 0.5);
        }

        .track-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 0 20px rgba(255, 255, 0, 0.3);
        }

        .track-card-container {
          width: 100%;
          aspect-ratio: 1;
          background: #1a1a1a;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .album-artwork {
          width: 100%;
          height: 100%;
          position: relative;
        }

        .album-artwork img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .album-placeholder {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3em;
          color: #444;
        }

        .placeholder-icon {
          font-size: 4em;
          color: #333;
        }

        .placeholder-skeleton {
          font-size: 0.8em;
          color: #666;
          font-family: 'Courier New', monospace;
        }

        .track-info {
          padding: 15px;
        }

        .track-number {
          color: #ffff00;
          margin: 0 0 5px 0;
          font-size: 0.95em;
          font-family: 'Courier New', monospace;
          line-height: 1.3;
          word-break: break-word;
        }

        .track-artist {
          color: #00d9ff;
          margin: 0 0 8px 0;
          font-size: 0.9em;
          font-family: 'Courier New', monospace;
        }

        .track-details {
          color: #999;
          margin: 0 0 12px 0;
          font-size: 0.8em;
          font-family: 'Courier New', monospace;
        }

        .spotify-button {
          display: inline-block;
          background: #1DB954;
          color: white;
          padding: 8px 12px;
          border-radius: 20px;
          text-decoration: none;
          font-size: 0.8em;
          font-weight: bold;
          transition: background 0.3s, transform 0.2s;
          font-family: Arial, sans-serif;
          white-space: nowrap;
        }

        .spotify-button:hover {
          background: #1ed760;
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .session-title {
            font-size: 2em;
          }

          .tracks-grid {
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
            gap: 15px;
          }
        }
      `}</style>
    </div>
  );
}
