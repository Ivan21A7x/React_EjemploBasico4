import React from 'react';
import { Typography, Box } from '@mui/joy';

export default function IntroComponent() {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography 
        level="h2" 
        sx={{ fontWeight: 'bold', marginBottom: 2 }}
      >
        Hola, bienvenido a mi página web...
      </Typography>

      <Typography level="body1" sx={{ marginBottom: 2 }}>
        Mi nombre es Lucino Iván, soy egresado de la carrera de Ingeniería en Computación Inteligente por la Universidad Autónoma de Aguascalientes. Mi enfoque se centra en el desarrollo de aplicaciones web utilizando tecnologías modernas como React.
      </Typography>

      <Typography level="body1" sx={{ marginBottom: 2 }}>
        A lo largo de mi carrera, he estudiado sobre la Inteligencia Artificial y la ciencia de la computación.
      </Typography>

      <Typography level="body1" sx={{ marginBottom: 2 }}>
        Me gusta resolver problemas complejos con soluciones eficientes y mantenerme en constante aprendizaje, integrando herramientas como Tailwind y Joy UI para mejorar la presentación visual y la accesibilidad de mis páginas web.
      </Typography>

      <Typography level="body1">
        Esta es una página web para demostrar un poco de mi trabajo en mis prácticas profesionales, en el menú de la esquina superior izquierda puedes encontrar tres proyectos sencillos.
      </Typography>
    </Box>
  );
}
