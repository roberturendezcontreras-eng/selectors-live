import { NextRequest, NextResponse } from 'next/server';

const getSpotifyToken = async () => {
  const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  
  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
  
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${auth}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
  });
  
  const data = await response.json();
  return data.access_token;
};

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');
  const artist = searchParams.get('artist');
  
  if (!query) {
    return NextResponse.json({ error: 'Query required' }, { status: 400 });
  }
  
  try {
    const token = await getSpotifyToken();
    const searchQuery = artist ? `${query} artist:${artist}` : query;
    
    const response = await fetch(
      `https://api.spotify.com/v1/search?q=${encodeURIComponent(searchQuery)}&type=track&limit=1`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      }
    );
    
    const data = await response.json();
    
    if (data.tracks && data.tracks.items.length > 0) {
      const track = data.tracks.items[0];
      return NextResponse.json({
        image: track.album.images[0]?.url || null,
        previewUrl: track.preview_url,
        externalUrl: track.external_urls.spotify,
        popularity: track.popularity,
      });
    }
    
    return NextResponse.json({ image: null, error: 'Track not found' });
  } catch (error) {
    console.error('Spotify API error:', error);
    return NextResponse.json({ error: 'Failed to fetch track' }, { status: 500 });
  }
}
