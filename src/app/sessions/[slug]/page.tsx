'use client';

import Link from 'next/link';
import { sessions } from '@/data/sessions';
import { notFound } from 'next/navigation';

export default function SessionPage({ params }: { params: { slug: string } }) {
  const session = sessions.find(s => s.slug === params.slug);

  if (!session) {
    notFound();
  }

  return (
    <>
      <Link href="/" style={{ color: '#00FFFF', marginBottom: '20px', display: 'inline-block', fontSize: '1.1em' }}>
        ← Back to Sessions
      </Link>

      <div className="header">
        <h1>{session.title}</h1>
        <p style={{ color: '#00FFFF', marginTop: '10px', fontSize: '1.1em' }}>DJ: {session.dj}</p>
        <p style={{ color: '#888' }}>Date: {session.date}</p>
      </div>

      {session.coverImage && (
        <img 
          src={session.coverImage} 
          alt={session.title}
          style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', marginBottom: '20px', border: '2px solid #FFFF00' }}
        />
      )}

      <div className="card" style={{ marginBottom: '30px' }}>
        <p style={{ fontSize: '1.05em', lineHeight: '1.6' }}>{session.description}</p>
      </div>

      <div>
        <h2 style={{ color: '#FFFF00', marginBottom: '20px', fontSize: '1.8em' }}>Tracklist ({session.tracks.length} Tracks)</h2>
        <ul className="track-list">
          {session.tracks.map((track, index) => (
            <li key={track.id} className="track-item">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ flex: 1 }}>
                  <div className="track-title">#{index + 1} {track.title}</div>
                  <div className="track-artist">by {track.artist}</div>
                  <div className="track-meta">
                    {track.bpm} BPM | Key: {track.key} | Duration: {track.duration}
                  </div>
                </div>
                <a 
                  href={`https://open.spotify.com/search/${encodeURIComponent(track.artist + ' ' + track.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="spotify-link"
                >
                  Open in Spotify
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
