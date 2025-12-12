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
    </div>
  );
}
