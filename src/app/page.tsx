'use client';

import Link from 'next/link';
import { sessions } from '@/data/sessions';

export default function Home() {
  return (
    <>
      <div className="header">
        <h1>🎵 SELECTORS (LIVE) 🎵</h1>
        <p style={{ fontSize: '1.2em', marginTop: '10px', color: '#00FFFF' }}>Electronic Music Sessions</p>
      </div>

      <div className="grid">
        {sessions.map((session) => (
          <Link key={session.id} href={`/sessions/${session.slug}`}>
            <div className="card">
              {session.coverImage && (
                <img 
                  src={session.coverImage} 
                  alt={session.title}
                  style={{ width: '100%', height: '200px', objectFit: 'cover', marginBottom: '15px', border: '2px solid #FFFF00' }}
                />
              )}
              <h2 style={{ color: '#FFFF00', marginBottom: '10px' }}>{session.title}</h2>
              <p style={{ color: '#00FFFF', marginBottom: '8px' }}>DJ: {session.dj}</p>
              <p style={{ color: '#888', marginBottom: '8px' }}>Date: {session.date}</p>
              <p style={{ color: '#888', fontSize: '0.9em' }}>{session.description}</p>
              <p style={{ color: '#FFFF00', marginTop: '10px', fontWeight: 'bold' }}>
                {session.tracks.length} Tracks
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
