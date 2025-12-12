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
    </>
  );
}
