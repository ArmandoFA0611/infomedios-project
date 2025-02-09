// src/app/media-catalog/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import MediaCard from '../components/MediaCard';
import SearchBar from '../components/SearchBar';

// Datos de ejemplo para el catálogo
const dummyMediaData = [
  { id: 1, title: 'Canal 1', description: 'Noticiero', schedule: '8:00 - 10:00' },
  { id: 2, title: 'Canal 2', description: 'Programa de entretenimiento', schedule: '10:00 - 12:00' },
  { id: 3, title: 'Canal 3', description: 'Deportes', schedule: '12:00 - 14:00' },
];

export default function MediaCatalog() {
  const [query, setQuery] = useState('');

  // Filtrado de medios según el término de búsqueda
  const filteredMedia = dummyMediaData.filter(media =>
    media.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Catálogo de Medios</h1>
      <SearchBar query={query} setQuery={setQuery} />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {filteredMedia.map(media => (
          <MediaCard key={media.id} media={media} />
        ))}
      </div>
      <Link href="/">
        Volver al inicio
      </Link>
    </div>
  );
}
