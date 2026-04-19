export const categoryLabels = {
  "rayos-x": "Rayos X",
  ecografia: "Ecografía",
  digitalizacion: "Digitalización",
  dental: "Dental",
  fluoroscopia: "Fluoroscopia",
  densitometria: "Densitometría",
};

export const audienceLabels = {
  humano: "Humano",
  veterinario: "Veterinario",
  general: "General",
};

export const mobilityLabels = {
  fijo: "Fijo",
  portatil: "Portátil",
};

export const categoryAudienceGroups = {
  "rayos-x": ["humano", "veterinario"],
  ecografia: ["humano", "veterinario"],
};

export const mobilityByFormat = {
  portatil: "portatil",
  movil: "portatil",
  fijo: "fijo",
  estacionario: "fijo",
  detector: "fijo",
  panoramico: "fijo",
  "cone-beam": "fijo",
  "arco-en-c": "fijo",
  dxa: "fijo",
};

const productDescriptions = {
  "ultra-100":
    "Alta potencia con generador de alta frecuencia (110 kV / 100 mA), que garantiza precisión en exposición e imágenes de alta calidad.",
  "sistema-portatil-digital-ultra-100-flat-panel":
    "Portabilidad y precisión en un solo sistema, combinando generador de alta frecuencia y detector digital de alta resolución, para obtener imágenes radiográficas rápidas y confiables.",
  "hf-525-plus":
    "Generador de 40 kW con control por microprocesador, que garantiza precisión en exposición y rendimiento radiográfico. Optimiza eficiencia operativa y reducción de dosis.",
  "hf-525-plus-digital":
    "Sistema radiográfico de alta frecuencia con potencia de hasta 40 kW, que ofrece precisión en exposición y versatilidad en estudios generales.",
  xfm:
    "Sistema móvil digital con motorización completa y detector inalámbrico, que ofrece alta movilidad y eficiencia operativa. Integra rotación ±90°, conectividad DICOM y diseño compacto.",
  "unidad-movil-digital-hf-525-plus":
    "Sistema móvil digital diseñado para estudios radiográficos con flujo clínico ágil y operación confiable.",
  "ultra-100-vet":
    "Potencia en formato compacto con generador de alta frecuencia (5 kW), que ofrece imágenes radiográficas de alta calidad y precisión diagnóstica. Incorpora medición automática SID, colimador LED y compatibilidad con sistemas DR, garantizando portabilidad, eficiencia y versatilidad en aplicaciones veterinarias.",
  "sistema-de-rayos-x-digital":
    "Sistema digital orientado a obtener imágenes radiográficas confiables con operación práctica para entornos veterinarios.",
  "sonoscape-e1-exp":
    "Nuevo desarrollo con sonda y funciones mejoradas que ofrecen imágenes de alta calidad y un flujo de trabajo eficiente. Equipado con tecnologías μ-Scan, PIH, Wide Scan y SR Flow, además de diseño compacto, pantalla LED HD y optimización automática de imagen.",
  "sonoscape-e2":
    "Sistema compacto y moderno de ecografía Doppler color diseñado para aplicaciones gastrointestinales, obstétricas, ginecológicas, cardíacas y de punto de atención. Ofrece optimización automática de imagen y cálculos inteligentes para un diagnóstico preciso y eficiente.",
  "sonoscape-x3":
    "Ecógrafo portátil de alto rendimiento con excelente calidad de imagen gracias a su plataforma avanzada de procesamiento multihaz, imágenes compuestas espaciales, μ-Scan y armónica por inversión de pulsos.",
  "sonoscape-x5":
    "Ecógrafo portátil con excelente calidad de imagen gracias a tecnologías multihaz, imágenes espaciales compuestas, SR Flow y Haz C-field. Ideal para urgencias, UCI, quirófano y emergencias.",
  "sonoscape-s8-exp":
    "Sistema portátil versátil que integra μ-scan, PHI y Spatial Compound, ofreciendo imagen 2D de alta calidad y Doppler avanzado para diagnósticos precisos.",
  "sonoscape-s9":
    "Equipo de ultrasonido versátil con tecnologías avanzadas como imagen compuesta, armónicos, elastografía y 4D en tiempo real, que garantizan alta resolución y precisión diagnóstica.",
  "sonoscape-x11":
    "Basado en la arquitectura C-Field+, ofrece alto rendimiento diagnóstico con óptima relación señal/ruido, alta resolución y velocidad de procesamiento avanzada.",
  "sonoscape-p9-elite":
    "Equipo de ultrasonido con enfoque en salud femenina, que integra μ-Scan, SR Flow, WideScan e imagen 3D/4D, ofreciendo alta definición y precisión diagnóstica.",
  "sonoscape-p12-elite":
    "Equipo de alta definición que integra μ-Scan+, SR Flow y WideScan, ofreciendo alta resolución, precisión diagnóstica y evaluación hemodinámica avanzada.",
  "sonoscape-p40-elite":
    "Sistema de alto rendimiento con arquitectura avanzada, que integra μ-Scan+, SR-Flow y Micro F, ofreciendo imágenes de alta definición y automatización inteligente con IA.",
  "sonoscape-p60":
    "Equipo estacionario de ultrasonido pensado para aplicaciones clínicas exigentes con flujo de trabajo ágil y alta capacidad diagnóstica.",
  "sonoscape-e1-exp-vet":
    "Sistema veterinario con alta resolución de contraste y flujo de trabajo optimizado para diagnósticos precisos. Integra software especializado y herramientas configurables para múltiples especies.",
  "sonoscape-x3-vet":
    "Doppler color con imagen de alta definición y optimización automática, que ofrece precisión diagnóstica y facilidad de uso en diversos entornos veterinarios.",
  "sonoscape-x5-vet":
    "Equipo con alta calidad de imagen, resolución superior y penetración profunda. Cuenta con software veterinario especializado y compatibilidad con múltiples sondas.",
  "sonoscape-propet-60":
    "Equipo diseñado para medicina veterinaria con μ-Scan+, SR Flow, elastografía y HQ Scan, que ofrece alta calidad de imagen y versatilidad clínica.",
  "flat-panel-lg-black-14x17":
    "Detector digital diseñado para digitalización radiográfica con flujo de trabajo rápido y captura de alta calidad.",
  "flat-panel-lg-black-17x17":
    "Detector digital de formato amplio orientado a estudios radiográficos con integración confiable y excelente definición.",
  "i-max-pro":
    "Radiografía panorámica dental con tecnología 2D/3D Cone Beam, que ofrece alta resolución y precisión diagnóstica avanzada. Integra funciones de optimización automática de imagen y reducción de artefactos.",
  "i-max-ceph-pro":
    "Radiografía panorámica y cefalométrica con tecnología 2D/3D Cone Beam y sensor CMOS, que ofrece alta resolución y análisis cefalométrico preciso.",
  "i-max-3d-xpro":
    "Sistema dental 3D orientado a estudios de alta resolución para planificación clínica y diagnóstico avanzado.",
  "i-max-3d-ceph-xpro":
    "Sistema dental 3D con capacidad cefalométrica para planificación ortodóntica y visualización detallada.",
  garion:
    "Sistema quirúrgico digital tipo arco en C con FPD de 9” y generador de 5 kW, que ofrece imágenes de alta calidad y precisión en tiempo real.",
  "carmex-rk-fp":
    "Arco en C diseñado para visualización intraoperatoria con operación estable y calidad de imagen confiable.",
  primus:
    "Densitometría ósea con tecnología DXA de haz en abanico, que permite análisis preciso de DMO, composición corporal y morfología esquelética.",
};

const rawProductCatalog = [
  {
    name: "Ultra 100",
    slug: "ultra-100",
    category: "rayos-x",
    audience: "humano",
    format: "portatil",
  },
  {
    name: "Sistema Portátil Digital Ultra 100 + Flat Panel",
    slug: "sistema-portatil-digital-ultra-100-flat-panel",
    category: "rayos-x",
    audience: "humano",
    format: "portatil",
  },
  {
    name: "HF-525 Plus",
    slug: "hf-525-plus",
    category: "rayos-x",
    audience: "humano",
    format: "fijo",
    featured: true,
  },
  {
    name: "HF-525 Plus Digital",
    slug: "hf-525-plus-digital",
    category: "rayos-x",
    audience: "humano",
    format: "fijo",
  },
  {
    name: "XFM",
    slug: "xfm",
    category: "rayos-x",
    audience: "humano",
    format: "movil",
  },
  {
    name: "Unidad Móvil Digital HF-525 Plus",
    slug: "unidad-movil-digital-hf-525-plus",
    category: "rayos-x",
    audience: "humano",
    format: "movil",
  },
  {
    name: "Ultra 100 Vet",
    slug: "ultra-100-vet",
    category: "rayos-x",
    audience: "veterinario",
    format: "portatil",
  },
  {
    name: "Sistema de Rayos X Digital",
    slug: "sistema-de-rayos-x-digital",
    category: "rayos-x",
    audience: "veterinario",
    format: "portatil",
  },
  {
    name: "SonoScape E1 EXP",
    slug: "sonoscape-e1-exp",
    category: "ecografia",
    audience: "humano",
    format: "portatil",
  },
  {
    name: "SonoScape E2",
    slug: "sonoscape-e2",
    category: "ecografia",
    audience: "humano",
    format: "portatil",
  },
  {
    name: "SonoScape X3",
    slug: "sonoscape-x3",
    category: "ecografia",
    audience: "humano",
    format: "portatil",
  },
  {
    name: "SonoScape X5",
    slug: "sonoscape-x5",
    category: "ecografia",
    audience: "humano",
    format: "portatil",
  },
  {
    name: "SonoScape S8 EXP",
    slug: "sonoscape-s8-exp",
    category: "ecografia",
    audience: "humano",
    format: "portatil",
  },
  {
    name: "SonoScape S9",
    slug: "sonoscape-s9",
    category: "ecografia",
    audience: "humano",
    format: "portatil",
  },
  {
    name: "SonoScape X11 Premium",
    slug: "sonoscape-x11",
    category: "ecografia",
    audience: "humano",
    format: "portatil",
  },
  {
    name: "SonoScape P9 Elite",
    slug: "sonoscape-p9-elite",
    category: "ecografia",
    audience: "humano",
    format: "estacionario",
    featured: true,
  },
  {
    name: "SonoScape P12 Elite",
    slug: "sonoscape-p12-elite",
    category: "ecografia",
    audience: "humano",
    format: "estacionario",
  },
  {
    name: "SonoScape P40 Elite",
    slug: "sonoscape-p40-elite",
    category: "ecografia",
    audience: "humano",
    format: "estacionario",
  },
  {
    name: "SonoScape P60",
    slug: "sonoscape-p60",
    category: "ecografia",
    audience: "humano",
    format: "estacionario",
  },
  {
    name: "SonoScape E1 EXP Vet",
    slug: "sonoscape-e1-exp-vet",
    category: "ecografia",
    audience: "veterinario",
    format: "portatil",
  },
  {
    name: "SonoScape X3 Vet",
    slug: "sonoscape-x3-vet",
    category: "ecografia",
    audience: "veterinario",
    format: "portatil",
  },
  {
    name: "SonoScape X5 Vet",
    slug: "sonoscape-x5-vet",
    category: "ecografia",
    audience: "veterinario",
    format: "portatil",
  },
  {
    name: "SonoScape ProPet 60",
    slug: "sonoscape-propet-60",
    category: "ecografia",
    audience: "veterinario",
    format: "estacionario",
    featured: true,
  },
  {
    name: "Flat Panel LG Black 14x17",
    slug: "flat-panel-lg-black-14x17",
    category: "digitalizacion",
    audience: "general",
    format: "detector",
    featured: true,
  },
  {
    name: "Flat Panel LG Black 17x17",
    slug: "flat-panel-lg-black-17x17",
    category: "digitalizacion",
    audience: "general",
    format: "detector",
  },
  {
    name: "I-MAX PRO",
    slug: "i-max-pro",
    category: "dental",
    audience: "general",
    format: "panoramico",
  },
  {
    name: "I-MAX CEPH PRO",
    slug: "i-max-ceph-pro",
    category: "dental",
    audience: "general",
    format: "panoramico",
  },
  {
    name: "I-MAX 3D XPRO",
    slug: "i-max-3d-xpro",
    category: "dental",
    audience: "general",
    format: "cone-beam",
  },
  {
    name: "I-MAX 3D CEPH XPRO",
    slug: "i-max-3d-ceph-xpro",
    category: "dental",
    audience: "general",
    format: "cone-beam",
  },
  {
    name: "GARION",
    slug: "garion",
    category: "fluoroscopia",
    audience: "general",
    format: "arco-en-c",
  },
  {
    name: "CARMEX RK FP",
    slug: "carmex-rk-fp",
    category: "fluoroscopia",
    audience: "general",
    format: "arco-en-c",
  },
  {
    name: "PRIMUS",
    slug: "primus",
    category: "densitometria",
    audience: "general",
    format: "dxa",
    featured: true,
  },
];

export const productCatalog = rawProductCatalog.map((product) => ({
  ...product,
  description:
    productDescriptions[product.slug] ??
    "Descripción disponible próximamente.",
  image: `/imgs/equipments/${product.slug}.jpg`,
  mobility: mobilityByFormat[product.format] ?? "fijo",
}));
