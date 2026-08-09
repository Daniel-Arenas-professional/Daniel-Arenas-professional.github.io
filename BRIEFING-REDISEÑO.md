# Briefing de rediseño — Portfolio de Daniel Arenas Barrios

> Documento pensado para pegarse tal cual en otra IA (ChatGPT, Claude, Gemini...) junto con la instrucción: **"Constrúyeme esta web en HTML, CSS y JavaScript vanilla siguiendo este briefing al detalle"**.

---

## 1. Contexto y objetivo

Quiero rediseñar por completo mi portfolio web personal. Actualmente es una web estática (HTML/CSS/JS puro, sin frameworks, alojada en GitHub Pages) con una estética correcta pero plana y poco animada. El objetivo es transformarla en una web **mucho más animada, dinámica y profesional**, que se sienta al nivel de las páginas personales de comunicadores, ponentes o creadores de contenido profesionales — con movimiento, personalidad y ritmo — pero aplicada a mi perfil real, que es **técnico en Logística y Transporte / Gestión Administrativa**.

**Idea central del posicionamiento:** aunque mi carrera no es la comunicación, soy una persona con facilidad de palabra, que ha dado charlas, ha ganado premios de presentación pública y disfruta explicando ideas con claridad. Quiero que la web transmita eso como un "plus" diferencial sobre mi perfil técnico — no que sustituya la logística por la comunicación, sino que la web tenga la energía, el ritmo visual y la seguridad expositiva de la web de un comunicador, aplicada a contar mi trayectoria en logística. Es decir: **contenido de logística, forma de comunicador**.

**Restricción técnica:** el sitio final debe ser HTML + CSS + JavaScript vanilla (sin frameworks tipo React), compatible con GitHub Pages (sin build ni bundler), ligero y rápido. Se pueden usar librerías vía CDN si aportan mucho valor de animación (ej. GSAP, AOS, Locomotive Scroll), pero el sitio tiene que seguir siendo estático.

---

## 2. Quién soy (para que la IA entienda a quién representa la web)

- **Nombre:** Daniel Arenas Barrios
- **Perfil:** Estudiante en formación en Transporte y Logística, titulado en Gestión Administrativa, con pasión por la innovación tecnológica aplicada a la cadena de suministro.
- **Enfoque:** estudiar y aplicar los cambios tecnológicos que están transformando la industria logística desde la eficiencia, la sostenibilidad y la competitividad.
- **Rasgo diferencial a destacar:** buena capacidad de comunicación y oratoria — ha dado charlas de orientación a estudiantes y ha ganado premios por la calidad de sus presentaciones (ver sección de proyectos más abajo).
- **Contacto:** daniel.arenas.barrios@gmail.com · LinkedIn: linkedin.com/in/daniel-arenas-barrios

---

## 3. Contenido real (usar tal cual, se puede pulir la redacción pero no inventar datos nuevos)

### 3.1 Hero / Portada
- Titular actual: "Técnico en Logística y Administración"
- Subtítulo actual: "Aprendiendo a optimizar redes de distribución, analizar datos operacionales y automatizar procesos logísticos para maximizar la eficiencia"
- CTA: enlace a LinkedIn

*(Sugerencia: en el rediseño, dale más punch al titular y añade un segundo CTA de contacto directo, además de un elemento visual animado — texto que se escribe solo, palabras que rotan como "logística · datos · comunicación · eficiencia", o un indicador de scroll animado.)*

### 3.2 Sobre mí
> "Estudiante en formación en Transporte y Logística, además de titulado en Gestión Administrativa con pasión por la innovación tecnológica aplicada a la cadena de suministro."

> "Mi enfoque se centra en estudiar y aplicar los cambios tecnológicos que están transformando la industria desde una perspectiva de eficiencia, sostenibilidad y competitividad."

*(Nota: en el original hay una errata "tencnológicos" → corregir a "tecnológicos".)*

### 3.3 Proyectos (actualmente en carrusel — en el rediseño se puede pasar a un grid tipo "bento" con tarjetas grandes, animadas al hacer scroll)

**Proyecto 1 — Charla de Orientación al alumnado**
Imagen: `assets/Charla FP.png`
> "Gracias a mi amplia experiencia en el ámbito de la formación profesional, tanto en clase como en empresas, ayudo a alumnos de la ESO a encontrar su motivación y su camino laboral para que les sea más fácil el cambio a estudios superiores. En esta charla comparto mi experiencia personal, consejos y recursos para que los estudiantes puedan tomar las mejores decisiones y no tengan miedo a equivocarse."
Tags: Comunicación, Desarrollo personal, Motivación

**Proyecto 2 — Ágora, un espacio ecológico**
Imagen: `assets/Agora.png`
> "Idea de empresa que hice junto a mi grupo en una clase de emprendimiento que tuvo lugar en la Universidad de Marketing y Gestión de Málaga, impartida por Diverxia. Gracias al trabajo que hicimos ese día conseguimos ganar el segundo premio del concurso de ideas de negocio, y el premio a la mejor presentación."
Tags: Sostenibilidad, Emprendimiento, Creatividad

**Nota importante de posicionamiento:** estos dos proyectos son la prueba real de tu perfil comunicativo (dar charlas + ganar un premio a "mejor presentación"). En el rediseño, estos dos elementos deberían tener protagonismo visual — quizás una sección propia tipo "Logros" o "Comunicación" con badges/insignias animadas (🏆 2º premio idea de negocio, 🏆 premio mejor presentación), en vez de quedar diluidos dentro de la grid genérica de proyectos.

### 3.4 Formación (timeline)

| Título | Centro | Fechas |
|---|---|---|
| Grado Medio en Gestión Administrativa | María Inmaculada | 2023 - 2025 |
| Grado Superior en Transporte y Logística | El Tablero | 2025 - 2027 (en curso) |

Además, actualmente la web incluye una grid de 6 "capacidades adquiridas" bajo Formación (esto se puede mantener o fusionar mejor con Habilidades para no duplicar contenido — decisión de diseño a tomar por la IA):
- 📊 Dashboard Operacional — monitoreo en tiempo real de flotas, KPIs, consumo de combustible, cumplimiento de rutas.
- 🗺️ Optimización de Rutas — planificación de rutas de larga distancia y reparto, mejor combinación de modos de transporte.
- 📦 Sistema de Trazabilidad — seguimiento de carga, historiales de temperatura, ubicación y eventos críticos.
- 💾 Análisis Predictivo — predicción de demanda, mantenimiento preventivo, optimización de inventarios.
- 🔗 Integración ERP — sistemas logísticos con SAP y plataformas TMS, sincronización de datos en tiempo real.
- 🤖 Automatización de Procesos — RPA y workflows automáticos para documentación, facturación y reportes.

### 3.5 Experiencia (timeline)

**Formarium** — [formarium.es](https://formarium.es/) — logo: `assets/Formarium logo.png`
Puesto: Auxiliar administrativo | Enero 2024 - Junio 2025
> "Responsable de la gestión administrativa de la empresa, así como de la organización y supervisión de los procesos internos, incluyendo la tramitación de matrículas y la gestión de la aplicación del centro."

**Grupo Geiners** — [grupogeiners.com](https://grupogeiners.com/) — logo: `assets/Grupo Geiners.svg`
Puesto: Auxiliar administrativo | Julio 2025 - Agosto 2025
> "Encargado de la digitalización y adaptación de los procesos administrativos internos de la empresa mediante la implantación de una aplicación de gestión profesional (ERP)."

**XPO Logistics** — [europe.xpo.com/es](https://europe.xpo.com/es/) — logo: `assets/XPO logo.png`
Puesto: Operador logístico | Enero 2026 - Junio 2027
> "Formé parte del equipo logístico en el que desempeñé funciones de seguimiento de rutas, finalización de envíos, coordinación de citas de descarga y dominaba el flujo de documentación diaria generada."

⚠️ **Revisar antes de publicar:** hoy es agosto de 2026, así que la experiencia en XPO Logistics ya está en curso pero tiene fecha de fin "Junio 2027" puesta como si fuera pasado. Decide si quieres que el rediseño lo muestre como "Enero 2026 - Actualidad" (trabajo en curso) en vez de un rango cerrado en el futuro — díselo explícitamente a la IA que lo construya para que no lo deje como error.

### 3.6 Habilidades (actualmente barras de progreso)

**Tecnología**
- Paquete Office — 90%
- ERP — 70%
- Programación básica — 65% *(en el original pone "Porgramación", corregir errata)*

**Logística**
- Optimización de Rutas — 65%
- Gestión de Flotas — 70%
- Cadena de Suministro — 85%

**Soft Skills**
- Análisis de Problemas — 85%
- Comunicación Técnica — 80%
- Liderazgo de Proyectos — 80%

*(Sugerencia: en el rediseño, las barras de progreso son el elemento más "plano" de la web actual. Sustituir por algo más vivo: anillos de progreso animados (radial), chips/etiquetas con peso visual según nivel, o un gráfico tipo "skill cloud" con tamaño de fuente proporcional al nivel. Mantener los mismos porcentajes/datos.)*

### 3.7 Contacto
> "¿Estás buscando a alguien profesional y con ganas de aprender? Contáctame."
CTA: mailto:daniel.arenas.barrios@gmail.com

### 3.8 Assets disponibles (reutilizar, no hace falta generar nuevos)
- `assets/Charla FP.png`
- `assets/Agora.png`
- `assets/Formarium logo.png`
- `assets/Grupo Geiners.svg`
- `assets/XPO logo.png`
- `assets/favicon.svg`

---

## 4. Dirección de diseño visual

### 4.1 Referencia de estilo
Inspírate en páginas personales de comunicadores, ponentes, periodistas y creadores profesionales (tipo landing de speaker/keynote, portfolios de agencias de comunicación, sitios de podcasters o formadores): tipografía grande y expresiva, mucho espacio en blanco/negro, movimiento constante pero elegante (nunca ruidoso), frases destacadas a modo de "cita" grande, uso de badges/insignias de logros, timeline animado, microinteracciones en cada botón y tarjeta. La sensación general debe ser "esta persona sabe presentarse y presentar sus ideas", no solo "esta persona sabe de logística".

### 4.2 Paleta de color
Mantener una base oscura elegante (la web actual ya usa azul marino `#0f172a` con acentos cian `#0ea5e9`, que funciona bien como fondo), pero **añadir un color de acento cálido y enérgico** que represente la faceta comunicativa — por ejemplo un coral/naranja (`#ff7a59` o similar) o un ámbar vibrante, usado en detalles: subrayados animados, badges de logros, hover states, iconos de "voz/micro". La combinación azul frío (técnico, logística, confianza) + acento cálido (energía, comunicación, cercanía) refuerza el doble perfil.

Sugerencia de paleta:
- Fondo base: `#0b0f1a` → `#141a2e` (degradado sutil, ya usado)
- Acento primario (tech/logística): azul cian `#0ea5e9` / `#38bdf8`
- Acento secundario (comunicación/energía): coral `#ff7a59` o ámbar `#f59e0b`
- Texto principal: `#e2e8f0`
- Texto secundario: `#94a3b8`
- Superficies/tarjetas: glassmorphism — fondo semitransparente `rgba(255,255,255,0.04)` con `backdrop-filter: blur()` y borde de 1px sutil

### 4.3 Tipografía
- Titulares: una fuente display con carácter y algo de peso editorial (ej. "Clash Display", "Bricolage Grotesque", "Space Grotesk" o "Sora" vía Google Fonts) — debe transmitir seguridad y modernidad, no aburrimiento corporativo.
- Cuerpo de texto: sans-serif limpia y muy legible (ej. "Inter" o "Manrope").
- Jerarquía marcada: el H1 del hero debe ser muy grande (clamp responsive, tipo `clamp(2.5rem, 6vw, 5rem)`), con animación de entrada (reveal por líneas o por palabras).

### 4.4 Layout general
- Modo oscuro por defecto, con opción de que el fondo tenga un gradiente animado sutil o un "mesh gradient" que se mueva muy lentamente (no distraer, solo dar vida).
- Header sticky con blur al hacer scroll y barra de progreso de lectura opcional.
- Secciones con generoso espaciado vertical, separación clara, y transiciones de scroll suaves (scroll-snap opcional entre secciones grandes).
- Uso de una cuadrícula "bento grid" para proyectos y capacidades, en vez de un carrusel simple — más moderno y permite mostrar más contenido a la vez, con tarjetas de distinto tamaño.
- Cursor personalizado (opcional) que cambie de forma sobre elementos interactivos, como en muchas webs de comunicadores/agencias creativas.

---

## 5. Animaciones e interacciones (esto es lo que más quiero que se note respecto a la web actual)

1. **Hero:** titular con animación de entrada (por palabras o letras, tipo GSAP SplitText o CSS), texto rotatorio de palabras clave (ej. "Logística · Datos · Comunicación · Eficiencia"), botón CTA con efecto magnético o hover elástico, e indicador de scroll animado (flecha rebotando o línea que se dibuja).
2. **Scroll reveal:** todas las secciones y tarjetas deben aparecer con fade + slide al entrar en el viewport (usar `IntersectionObserver` nativo o la librería AOS/GSAP ScrollTrigger vía CDN).
3. **Contadores animados:** en alguna sección destacada (ej. justo debajo del hero o en "Sobre mí"), añadir 3-4 cifras clave que cuenten hacia arriba al hacer scroll: años de formación, número de empresas donde ha trabajado, número de charlas/premios, etc. (usar los datos reales: 2 empresas + prácticas, 1 charla dada, 2 premios ganados en Ágora).
4. **Tarjetas de proyectos y experiencia:** efecto hover con inclinación 3D suave (tilt), sombra dinámica, y logo/imagen con leve zoom al pasar el ratón.
5. **Timeline de Formación/Experiencia:** línea vertical que se "dibuja" progresivamente a medida que el usuario hace scroll (usando un `stroke-dashoffset` animado o un gradiente de altura que crece), con los puntos apareciendo con un pequeño rebote.
6. **Habilidades:** anillos o barras que se rellenan animadamente solo cuando entran en el viewport (no al cargar la página).
7. **Sección de logros/comunicación:** badges tipo "🏆 2º Premio Idea de Negocio" y "🏆 Premio Mejor Presentación" con una animación de aparición tipo "sello" (scale + rotate leve) para dar sensación de reconocimiento.
8. **Marquee/carrusel infinito** con los logos de las empresas (Formarium, Grupo Geiners, XPO) desplazándose horizontalmente sin fin, como sección de "confían en mí" o "he trabajado con".
9. **Botones y enlaces:** todos con microinteracciones (subrayado animado, cambio de color con transición suave, efecto ripple opcional al hacer click).
10. **Modo reducido:** respetar `prefers-reduced-motion` — si el usuario tiene animaciones reducidas activadas en su sistema, desactivar las animaciones no esenciales.

---

## 6. Estructura de secciones propuesta (orden sugerido)

1. **Header/Nav** — sticky, con blur al hacer scroll, menú hamburguesa animado en móvil.
2. **Hero** — titular potente, subtítulo, doble CTA (LinkedIn + Contacto), animación de entrada.
3. **Cifras clave** (nuevo) — contador animado con 3-4 datos reales.
4. **Sobre mí** — texto actual mejorado, con foto/avatar si se dispone de una, o un elemento gráfico animado.
5. **Comunicación y logros** (nuevo, o fusionado con Proyectos) — destacar la Charla FP y el proyecto Ágora con sus premios, con badges animados. Este bloque es clave para el posicionamiento "comunicativo".
6. **Proyectos** — bento grid con los dos proyectos actuales (dejar preparado el layout para añadir más en el futuro).
7. **Formación** — timeline animado + capacidades adquiridas.
8. **Experiencia** — timeline o tarjetas con logos de empresas, marquee de logos.
9. **Habilidades** — anillos/chips animados, sin duplicar contenido de Formación.
10. **Contacto** — CTA grande y claro, email + LinkedIn, quizá con un pequeño formulario visual (aunque sea solo mailto, dado que es sitio estático).
11. **Footer** — igual que ahora, actualizado.

---

## 7. Tono de voz / copywriting
Mantener el idioma español, cercano pero profesional. Evitar frases genéricas de plantilla. Donde se pueda, reforzar frases que muestren iniciativa y comunicación (por ejemplo, en el hero o en "sobre mí", se puede añadir una línea corta que mencione la faceta comunicativa, ej.: *"Combino la precisión técnica de la logística con la capacidad de contar historias y conectar con las personas."*) — pero sin inventar datos nuevos, solo reforzando lo que ya está respaldado por los proyectos reales (charla + premio de presentación).

---

## 8. Requisitos técnicos
- HTML5 semántico, CSS3 (custom properties/variables para la paleta), JavaScript vanilla (o librerías ligeras vía CDN: GSAP + ScrollTrigger, o AOS, para las animaciones de scroll).
- Totalmente responsive (mobile-first), con especial cuidado en que las animaciones no rompan el layout en móvil.
- Accesible: contraste de color AA mínimo, `alt` en todas las imágenes, navegación por teclado funcional, `prefers-reduced-motion` respetado.
- Rendimiento: imágenes optimizadas, animaciones con `transform`/`opacity` (evitar animar propiedades costosas como `width`/`top`), lazy loading de imágenes fuera del viewport inicial.
- Compatible con GitHub Pages: sin build step, todo en `index.html` + `styles.css` (+ opcional `script.js` separado) + carpeta `assets/`.
- Reutilizar los assets ya existentes (logos, imágenes de proyectos, favicon) — no inventar imágenes nuevas que no existen.

---

## 9. Entregable esperado
Código completo y funcional de `index.html`, `styles.css` y JavaScript (inline o en archivo separado), listo para sustituir a los archivos actuales del repositorio, manteniendo toda la información real indicada arriba y aplicando la dirección de diseño descrita.
