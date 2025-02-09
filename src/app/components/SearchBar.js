// src/components/SearchBar.js
export default function SearchBar({ query, setQuery }) {
    return (
      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Buscar canal..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          style={{ padding: '0.5rem', width: '100%', maxWidth: '300px' }}
        />
      </div>
    );
  }
  