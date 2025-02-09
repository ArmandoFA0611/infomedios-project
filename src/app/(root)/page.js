// src/app/page.js
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Bienvenido a Infomedios</h1>
      <nav>
        <ul>
          <li>
            <Link href="/institutional">
              Página Institucional
            </Link>
          </li>
          <li>
            <Link href="/media-catalog">
              Catálogo de Medios
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
