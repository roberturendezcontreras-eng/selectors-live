export interface Track {
  id: string;
  title: string;
  artist: string;
  bpm: number;
  key: string;
  album: string;
  duration: string;
  spotifyUrl?: string;
  artwork?: string;
}

export interface Session {
  id: string;
  slug: string;
  title: string;
  date: string;
  dj: string;
  description: string;
  tracks: Track[];
  coverImage?: string;
    mixcloudUrl?: string;
    vimeoUrl?: string;
}

export const sessions: Session[] = [
  {
    id: '1',
    slug: 'session-1',
    title: 'First Live Session',
    date: '2024-01-20',
    dj: 'DJ Robert',
    description: 'Electronic music journey through deep house and techno',
    coverImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&h=800&fit=crop',
        mixcloudUrl: 'https://player-widget.mixcloud.com/widget/iframe/?light=1&feed=%2Finvasionselectors%2Fselectors-vol1-20251211-235405%2F',
        vimeoUrl: 'https://player.vimeo.com/video/76979871',
    tracks: [
      { id: '1', title: 'Turning Around (Gerd Janson Remix)', artist: 'Theo Kottis', bpm: 124, key: 'Ab', album: 'Turning Around (Gerd Janson Remix)', duration: '06:50' },
      { id: '2', title: 'Closer to the Truth', artist: 'Jaymo & Andy George', bpm: 122, key: 'G', album: 'Single', duration: '06:15' },
      { id: '3', title: 'Move It', artist: 'Pional', bpm: 120, key: 'C', album: 'Single', duration: '05:45' },
      { id: '4', title: 'Moment In Time', artist: 'Sohail Rana', bpm: 118, key: 'D', album: 'Single', duration: '06:30' },
      { id: '5', title: 'Visions', artist: 'Jez P & D. Ramirez', bpm: 126, key: 'F#', album: 'Single', duration: '05:50' },
      { id: '6', title: 'Dance Till Dawn (Joeski Remix)', artist: 'David Vendetta', bpm: 124, key: 'E', album: 'Dance Till Dawn', duration: '06:20' },
      { id: '7', title: 'In My Veins', artist: 'Alonso', bpm: 121, key: 'A', album: 'Single', duration: '06:00' },
      { id: '8', title: 'In My Soul', artist: 'Anabel Englund & Serge Devant', bpm: 122, key: 'B', album: 'Single', duration: '05:55' },
      { id: '9', title: 'Spirit', artist: 'Ferreck Dawn & Hunter S Thompson', bpm: 125, key: 'G#', album: 'Single', duration: '06:10' },
      { id: '10', title: 'Lost', artist: 'Guz', bpm: 123, key: 'C#', album: 'Single', duration: '06:25' },
      { id: '11', title: 'Closer (Sasha Steel Remix)', artist: 'Mirco Caruso', bpm: 120, key: 'D#', album: 'Closer', duration: '06:40' },
      { id: '12', title: 'Chasing Dreams', artist: 'John Summit & Zonderbar', bpm: 124, key: 'F', album: 'Single', duration: '05:30' },
      { id: '13', title: 'Take Me There', artist: 'Aya Konar', bpm: 122, key: 'G#', album: 'Single', duration: '06:05' },
      { id: '14', title: 'Over It', artist: 'Archie Lyndhurst', bpm: 120, key: 'A#', album: 'Single', duration: '06:15' },
      { id: '15', title: 'Come Around (Original Mix)', artist: 'Habstrakt', bpm: 125, key: 'D', album: 'Come Around', duration: '05:45' },
      { id: '16', title: 'Electricity', artist: 'Habstrakt & Shiba San', bpm: 123, key: 'E', album: 'Single', duration: '06:30' },
      { id: '17', title: 'Hypermove (Original Mix)', artist: 'Shiba San', bpm: 126, key: 'F#', album: 'Hypermove', duration: '05:50' },
      { id: '18', title: 'Alright (Original Mix)', artist: 'Shiba San', bpm: 124, key: 'G', album: 'Single', duration: '06:10' },
      { id: '19', title: 'Cloud Nine (Original Mix)', artist: 'Green Velvet', bpm: 122, key: 'C', album: 'Cloud Nine', duration: '06:20' },
      { id: '20', title: 'Flash', artist: 'Chris Stussy', bpm: 128, key: 'B', album: 'Flash', duration: '05:45' },
      { id: '21', title: 'Pressure Drop', artist: 'FISHERMAN & HAWKINS', bpm: 125, key: 'A', album: 'Single', duration: '06:00' },
      { id: '22', title: 'Change (Original Mix)', artist: 'John Summit', bpm: 120, key: 'D#', album: 'Change', duration: '06:40' },
      { id: '23', title: 'Frequency', artist: 'Green Velvet & Chris Stussy', bpm: 127, key: 'F#', album: 'Single', duration: '05:55' },
      { id: '24', title: 'Push It', artist: 'Claptone', bpm: 123, key: 'G#', album: 'Single', duration: '06:25' },
      { id: '25', title: 'Vibes (Original Mix)', artist: 'Chris Stussy', bpm: 124, key: 'A#', album: 'Vibes', duration: '06:15' },
      { id: '26', title: 'Serotonin', artist: 'GVD', bpm: 126, key: 'C#', album: 'Single', duration: '05:50' },
      { id: '27', title: 'Sunrise (Original Mix)', artist: 'Thomas Gold', bpm: 122, key: 'E', album: 'Sunrise', duration: '06:30' },
      { id: '28', title: 'Back to Life', artist: 'Charlotte de Witte', bpm: 125, key: 'F', album: 'Single', duration: '06:10' },
      { id: '29', title: 'Lost in Love', artist: 'ANNA', bpm: 124, key: 'G', album: 'Single', duration: '05:45' },
      { id: '30', title: 'Midnight Dreams', artist: 'Robert Dietz', bpm: 123, key: 'B', album: 'Single', duration: '06:00' },
      { id: '31', title: 'Electric Souls', artist: 'Ellen Allien', bpm: 120, key: 'D', album: 'Electric Souls', duration: '06:35' },
      { id: '32', title: 'Moving Forward', artist: 'Adam Beyer', bpm: 127, key: 'F#', album: 'Single', duration: '05:55' },
      { id: '33', title: 'Final Hour', artist: 'Richie Hawtin', bpm: 125, key: 'G#', album: 'Single', duration: '06:20' },
      { id: '34', title: 'Dawn', artist: 'Amelie Lens', bpm: 122, key: 'A', album: 'Dawn', duration: '06:45' }
    ]
  }
];
