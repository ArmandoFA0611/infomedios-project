// src/components/MediaCard.js
export default function MediaCard({ media }) {
    return (
      <div style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '1rem',
        width: '200px'
      }}>
        <h3>{media.title}</h3>
        <p>{media.description}</p>
        <p><strong>Horario:</strong> {media.schedule}</p>
      </div>
    );
  }
  