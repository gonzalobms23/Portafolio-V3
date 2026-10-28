export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'simuladores' | 'vr' | 'juegos' | 'educacion';
  categoryLabel: string;
  year: string;
  clientOrOrg?: string;
  coverImage: string;
  images: string[];
  summary: string;
  description: string;
  technicalDetails: string[];
  technologies: string[];
  hasPlayDemo?: boolean;
  playLabel?: string;
  // ENLACES EDITABLES: Puedes cambiar la URL y el texto del botón aquí
  projectUrl?: string;
  actionLabel?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

export const PERSONAL_INFO = {
  name: "Gonzalo Mayhuire Saire",
  studioName: "Black Cat Studio",
  title: "Ingeniero de Software · VR & Videojuegos",
  tagline: "Simuladores de maquinaria pesada, soluciones VR para minería y videojuegos en Unity.",
  location: "Arequipa, Perú",
  phone: "+51 950 366 255",
  phoneRaw: "+51950366255",
  email: "gonzalobms23@gmail.com",
  cvPdfPath: "/assets/aistudio/CurriculumR5_053a31f2.pdf",
  experienceYears: "7+",
  cohortsTaught: "9+",
  bioShort: "Ingeniero de Sistemas e Informática con formación en Metalurgia. +7 años creando simuladores de alta fidelidad física para minería, sistemas de capacitación VR (LOTOTO) y videojuegos comerciales en Unity y C#.",
  quickHighlights: [
    { title: "Ingeniería + Metalurgia", desc: "Comprensión técnica real de tajo abierto y equipos mineros." },
    { title: "Docente en TECSUP", desc: "9 promociones formadas en desarrollo de videojuegos y C#." },
    { title: "Premios Hackathon", desc: "2.º Puesto Perumin y 3.er Puesto El Comercio." }
  ]
};

export const SKILL_CATEGORIES = [
  {
    name: "Motores & Realidad Virtual",
    skills: ["Unity 3D / 2D", "Unreal Engine", "SteamVR / Meta Quest", "WebGL"]
  },
  {
    name: "Lenguajes de Programación",
    skills: ["C#", "Python", "JavaScript / TypeScript", "Java"]
  },
  {
    name: "Bases de Datos & Backend",
    skills: ["PostgreSQL", "MySQL", "SQL Server", "Django"]
  },
  {
    name: "Arte 3D & Gráficos",
    skills: ["Blender 3D", "Pixel Art", "Photoshop", "Illustrator"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "simulador-pala-minera",
    title: "Pala Eléctrica Minera P&H 4100XPC",
    subtitle: "Simulador de excavación y carga pesada",
    category: "simuladores",
    categoryLabel: "Simuladores Mineros",
    year: "2024",
    clientOrOrg: "Sector Minero",
    coverImage: "/assets/aistudio/SimuladorPalaminera1_0a3058f9.png",
    images: [
      "/assets/aistudio/SimuladorPalaminera1_0a3058f9.png",
      "/assets/aistudio/Simuladorpalaminera2_8e55dc10.png"
    ],
    summary: "Física dinámica de excavación, balde y descarga sobre camiones de acarreo en tajo abierto.",
    description: "Simulador operativo en Unity con cinemática precisa de brazos articulados, cables de izaje y dinámica de material dinamitado para la capacitación de operadores.",
    technicalDetails: [
      "Física cinemática inversa para brazos y cables de empuje.",
      "Sistema de cálculo de carga útil y colisiones en tolva.",
      "Modelado 3D y optimización de polígonos en Blender."
    ],
    technologies: ["Unity", "C#", "Blender", "Física 3D", "VR"],
    actionLabel: "Probar Simulación",
    projectUrl: "https://store.steampowered.com"
  },
  {
    id: "capacitacion-lototo-vr",
    title: "Capacitación LOTOTO & Seguridad VR",
    subtitle: "Bloqueo y desenergización en Realidad Virtual",
    category: "vr",
    categoryLabel: "VR & Seguridad",
    year: "2024",
    clientOrOrg: "TrainBeyond / Interimnova",
    coverImage: "/assets/aistudio/RecorridoSeguridad1_a11c9523.png",
    images: [
      "/assets/aistudio/RecorridoSeguridad1_a11c9523.png",
      "/assets/aistudio/RecorridoSeguridad3_00e6fa59.png",
      "/assets/aistudio/RecorridoSeguridad4_6f7fc452.png",
      "/assets/aistudio/RecorridoSeguridad5_74f57e09.png",
      "/assets/aistudio/RecorridoSeguridad6_00e6fa59.png",
      "/assets/aistudio/RecorridoSeguridad7_6f7fc452.png",
      "/assets/aistudio/Recorridoseguridad2_74f57e09.png"
    ],
    summary: "Simulación inmersiva de protocolos LOTOTO en subestaciones y plantas concentradoras.",
    description: "Entorno interactivo para entrenamiento y certificación de operarios en bloqueo de energía peligrosa, colocación de candados/tarjetas y matriz IPERC.",
    technicalDetails: [
      "Interacción con mandos VR en Meta Quest y SteamVR.",
      "Validación de pasos secuenciales obligatorios con feedback de errores.",
      "Optimización de escenas industriales complejas mediante LODs y culling."
    ],
    technologies: ["VR", "Unity", "C#", "LOTOTO", "Meta Quest"],
    actionLabel: "Probar en VR",
    projectUrl: "https://www.meta.com/experiences"
  },
  {
    id: "ear-clicker-game",
    title: "Ear Clicker (Videojuego Publicado)",
    subtitle: "Incremental medieval con pixel art original",
    category: "juegos",
    categoryLabel: "Videojuego Comercial",
    year: "2023",
    clientOrOrg: "Black Cat Studio (Steam / Mobile)",
    coverImage: "/assets/aistudio/Clicker1_7b4e4a18.png",
    images: [
      "/assets/aistudio/Clicker1_7b4e4a18.png",
      "/assets/aistudio/Clicker2_9eb7ee75.png",
      "/assets/aistudio/Clicker3_af0188ad.png",
      "/assets/aistudio/Clicker4_63da82f7.png",
      "/assets/aistudio/Clicker5_b8bdd61f.png"
    ],
    summary: "Juego comercial publicado con arte pixel art, sistema de asedio, mejoras de tropas y hordas enemigas.",
    description: "Diseño y programación completa de juego incremental medieval. Defiende tu fortaleza contratando arqueros, caballeros y mejorando daño por click.",
    technicalDetails: [
      "Pixel art y animaciones cuadro a cuadro creadas desde cero.",
      "Economía de juego exponencial y arquitectura modular en C#.",
      "Publicado comercialmente con guardado persistente."
    ],
    technologies: ["Unity", "C#", "Pixel Art", "Game Design"],
    hasPlayDemo: true,
    playLabel: "Mini Demo Jugable",
    actionLabel: "Jugar",
    projectUrl: "https://store.steampowered.com"
  },
  {
    id: "simulador-camion-minero",
    title: "Simulador de Camión Minero",
    subtitle: "Conducción en circuito tajo abierto con instrumental",
    category: "simuladores",
    categoryLabel: "Simuladores Mineros",
    year: "2023",
    clientOrOrg: "Industria Minera",
    coverImage: "/assets/aistudio/SimuladorCamionMinero_1fd0569e.png",
    images: [
      "/assets/aistudio/SimuladorCamionMinero_1fd0569e.png",
      "/assets/aistudio/Simuladorcamion2_702a2a9a.png"
    ],
    summary: "Módulo de conducción con instrumental analógico y digital, marchas 1N y bermas de seguridad.",
    description: "Entrenamiento para operadores de camiones de extracción con tacómetro de RPM, medidores de frenos, retardador y conducción en pendientes.",
    technicalDetails: [
      "Física vehicular de tracción y frenado para camiones pesados.",
      "Tablero digital con telemetría en tiempo real.",
      "Diseño de pistas y peraltes de acarreo minero."
    ],
    technologies: ["Unity", "C#", "Física Vehicular", "Telemetría"],
    actionLabel: "Probar Simulación",
    projectUrl: "https://store.steampowered.com"
  },
  {
    id: "simulador-montacargas",
    title: "Simulador de Montacargas Industrial",
    subtitle: "Maniobras de carga y slalom en almacén",
    category: "simuladores",
    categoryLabel: "Simuladores Logísticos",
    year: "2023",
    clientOrOrg: "Capacitación Logística",
    coverImage: "/assets/aistudio/Simuladormontacargas_2d203d1d.png",
    images: [
      "/assets/aistudio/Simuladormontacargas_2d203d1d.png",
      "/assets/aistudio/Simuladormontacargas2_86747197.png"
    ],
    summary: "Control hidráulico de horquillas, elevación de pallets y navegación por radar en nave industrial.",
    description: "Simulador de entrenamiento en almacén para maniobras con pallets, estantes industriales y penalización por infracciones.",
    technicalDetails: [
      "Física de horquillas con centro de gravedad de la carga.",
      "Minimapa tipo radar con detección de obstáculos.",
      "Soporte para volante y pedales de simulación."
    ],
    technologies: ["Unity", "C#", "NavMesh", "Física de Colisiones"],
    actionLabel: "Probar Simulación",
    projectUrl: "https://store.steampowered.com"
  },
  {
    id: "simulador-cargador-excavadora",
    title: "Cargador Frontal & Excavadora",
    subtitle: "Movimiento de tierras y brazos articulados",
    category: "simuladores",
    categoryLabel: "Simuladores Mineros",
    year: "2024",
    clientOrOrg: "Sector Construcción & Minería",
    coverImage: "/assets/aistudio/SimuladorcargadorFrontal_80ebced0.png",
    images: [
      "/assets/aistudio/SimuladorcargadorFrontal_80ebced0.png",
      "/assets/aistudio/SimuladorcargadorFrontal2_df5e357f.png",
      "/assets/aistudio/Simuladorexcavadora_f47f4505.png"
    ],
    summary: "Simulación de brazos hidráulicos, cuchara de empuje y waypoints holográficos de avance.",
    description: "Entrenamiento para cargadores frontales y excavadoras sobre orugas, enfocado en ciclos de carguío y precisión de empuje.",
    technicalDetails: [
      "Cinemática inversa para doble pistón hidráulico.",
      "Indicadores holográficos de avance y precisión.",
      "Alertas sonoras de sobrerrevolución."
    ],
    technologies: ["Unity", "C#", "Cinemática Inversa", "Blender"],
    actionLabel: "Probar Simulación",
    projectUrl: "https://store.steampowered.com"
  },
  {
    id: "earth-defense-game",
    title: "Earth Defense (Videojuego Publicado)",
    subtitle: "Arcade orbital 360° en Play Store",
    category: "juegos",
    categoryLabel: "Videojuego Comercial",
    year: "2022",
    clientOrOrg: "Black Cat Studio",
    coverImage: "/assets/aistudio/EarhDefense_9c5fc155.png",
    images: [
      "/assets/aistudio/EarhDefense_9c5fc155.png"
    ],
    summary: "Arcade dinámico de defensa planetaria circular con combos, monedas cósmicas y naves enemigas.",
    description: "Videojuego publicado en tiendas móviles donde defiendes la órbita de la Tierra interceptando oleadas alienígenas.",
    technicalDetails: [
      "Rotación orbital polar y trayectorias parabólicas.",
      "Shaders de brillo espacial y optimización de partículas.",
      "Tablas de récords locales y monedas cósmicas."
    ],
    technologies: ["Unity", "C#", "Pixel Art", "Mobile Games"],
    actionLabel: "Jugar",
    projectUrl: "https://play.google.com"
  },
  {
    id: "showroom-3d-gr-yaris",
    title: "Showroom 3D Toyota GR Yaris",
    subtitle: "Experiencia WebGL y habitáculo 360°",
    category: "vr",
    categoryLabel: "Experiencias 3D",
    year: "2023",
    clientOrOrg: "Interimnova",
    coverImage: "/assets/aistudio/RecorridoCarros1_e1608717.png",
    images: [
      "/assets/aistudio/RecorridoCarros1_e1608717.png",
      "/assets/aistudio/Recorrido_Carros_2_0608a568.png"
    ],
    summary: "Configurador de color de carrocería, apertura de puertas e interior con hotspots técnicos.",
    description: "Experiencia 3D fotorrealista con visualización exterior e interior deportiva del GR Yaris.",
    technicalDetails: [
      "Materiales PBR con reflejos dinámicos.",
      "Hotspots interactivos con fichas de ingeniería.",
      "Despliegue WebGL de carga rápida."
    ],
    technologies: ["Unity", "WebGL", "Blender", "Shaders PBR"],
    actionLabel: "Ir a la Página",
    projectUrl: "https://toyota.pe"
  },
  {
    id: "laboratorios-virtuales-ciencias",
    title: "Laboratorios Virtuales de Ciencias",
    subtitle: "Física, química y termodinámica para Tecsup",
    category: "educacion",
    categoryLabel: "Laboratorios 3D",
    year: "2024",
    clientOrOrg: "TECSUP",
    coverImage: "/assets/aistudio/laboratorioQuimica1_61b9f0e3.png",
    images: [
      "/assets/aistudio/laboratorioQuimica1_61b9f0e3.png",
      "/assets/aistudio/laboratorioQuimica2_63beb805.png",
      "/assets/aistudio/cursoMecacinaAire_4ad2e8b9.png"
    ],
    summary: "Simulaciones experimentales de equilibrio estático, densidades y refrigeración industrial.",
    description: "Laboratorios virtuales desarrollados para complementar las prácticas presenciales de ingeniería en Tecsup.",
    technicalDetails: [
      "Modelos matemáticos precisos de estática y densidad.",
      "Bancos interactivos de compresor y presostato.",
      "Evaluación automatizada de resultados."
    ],
    technologies: ["Unity", "C#", "Simulación", "Tecsup"],
    actionLabel: "Probar Laboratorio",
    projectUrl: "https://tecsup.edu.pe"
  }
];

export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    role: "Desarrollador de Software VR",
    company: "TrainBeyond",
    period: "Marzo 2026 – Actualidad",
    description: "Desarrollo de módulos inmersivos para minería de tajo abierto y subterránea.",
    highlights: ["Simuladores situacionales en VR", "Físicas hápticas y protocolos de emergencia"]
  },
  {
    role: "Desarrollador de Capacitación en RV",
    company: "Interimnova",
    period: "Enero 2026 – Actualidad",
    description: "Soluciones de Realidad Virtual y Aumentada para capacitación y marketing corporativo.",
    highlights: ["Módulos formativos con telemetría", "Experiencias WebGL 3D interactivas"]
  },
  {
    role: "Profesor de Desarrollo de Videojuegos",
    company: "CODIGO by Tecsup",
    period: "Enero 2020 – Febrero 2026",
    description: "Formación de 9 cohortes de nuevos programadores de videojuegos.",
    highlights: ["Enseñanza de Unity, C#, POO y Pixel Art", "Mentoría y publicación en tiendas digitales"]
  },
  {
    role: "Desarrollador en Jefe de Software",
    company: "Evolution Soluciones Digitales",
    period: "Setiembre 2018 – Enero 2026",
    description: "Liderazgo técnico en simuladores de maquinaria pesada, VR y backend Python/Django.",
    highlights: ["Simuladores mineros y de logística", "Arquitectura backend e integración de hardware"]
  }
];

export const EDUCATION_ITEMS = [
  {
    degree: "Ingeniería de Sistemas e Informática",
    institution: "Universidad Tecnológica del Perú (UTP)",
    period: "2017 – 2023",
    detail: "Ingeniería de software, sistemas distribuidos y bases de datos."
  },
  {
    degree: "Técnico en Metalurgia",
    institution: "Instituto Superior Honorio Delgado",
    period: "2012 – 2014",
    detail: "Procesos de concentración minera, chancado y maquinaria industrial."
  }
];

export const AWARDS_LIST = [
  {
    name: "2.º Puesto — Hackathon Perumin",
    org: "Convención Minera PERUMIN",
    year: "Nov 2019"
  },
  {
    name: "3.er Puesto — Hackathon El Comercio",
    org: "Diario El Comercio",
    year: "Nov 2017"
  }
];
