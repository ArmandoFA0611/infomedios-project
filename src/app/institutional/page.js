// src/app/institutional/page.tsx
import Link from 'next/link';

export default function Institutional() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Información Institucional</h1>
      <p>
        Infomedios es una empresa líder en el monitoreo de medios. Ofrecemos soluciones integrales para el análisis y la gestión de información en tiempo real.
      </p>
      <p>
        Nuestros servicios incluyen el seguimiento de medios tradicionales y digitales, ofreciendo reportes detallados y análisis estratégico para nuestros clientes.
      </p>
      <Link href="/">
        Volver al inicio
      </Link>
    </div>
  );
}
