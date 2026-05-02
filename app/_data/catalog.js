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

export const formatLabels = {
  portatil: "Portátil",
  movil: "Móvil",
  fijo: "Fijo",
  estacionario: "Estacionario",
  detector: "Detector",
  panoramico: "Panorámico",
  "cone-beam": "Cone Beam",
  "arco-en-c": "Arco en C",
  dxa: "DXA",
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

const productDetails = {
  "ultra-100": {
    brandLogos: ["/imgs/logos/ecoray.webp"],
    specSections: [
      {
        items: [
          "Potencia de salida: 5.0 kW",
          "Rango kV: 40 - 110 kV / Rango mA: 25 - 100 mA",
          "Rango mAs: 0.32 - 200 mAs",
          "Medicion automatica de SID por sensor ultrasonico",
          "Punto focal: 1.8 mm sencillo",
          "Memoria PROM: 128 APR",
          "Puntero laser Clase 1 (no peligroso)",
          "Facil conexion a solucion de radiografia digital (DR)",
          "Voltaje universal: 110 - 240 VAC",
          "Peso neto: 16 kg - diseno compacto y portatil",
          "Soporte movil y mesa disponibles como accesorios opcionales",
          "Certificado Europeo CE MDD para uso medico",
        ],
      },
    ],
  },
  "sistema-portatil-digital-ultra-100-flat-panel": {
    brandLogos: ["/imgs/logos/ecoray.webp", "/imgs/logos/lg.webp"],
    specSections: [
      {
        title: "Generador Ultra 100",
        items: [
          "Potencia de salida: 5.0 kW",
          "Rango kV: 40 - 110 kV / Rango mA: 25 - 100 mA",
          "Rango mAs: 0.32 - 200 mAs",
          "Medicion automatica de SID por sensor ultrasonico",
          "Memoria PROM: 128 APR",
          "Puntero laser Clase 1 (seguro)",
          "Peso neto: 16 kg - compacto y portatil",
        ],
      },
      {
        title: 'Flat Panel Inalambrico 17"x17"',
        items: [
          "Compatible con practicamente todos los sistemas radiograficos sin necesidad de conexion electrica al generador, gracias a la Deteccion Automatica de Exposicion (AED)",
          "Tecnologia de Silicio Amorfo (a-Si) con conversion A/D de 16 bits",
          "Tamano de pixel: 139 um - alta resolucion y detalle de imagen",
          "Matriz de pixeles: 3072 x 3072",
          "Conexion inalambrica (Wireless)",
          "Dimensiones: 460 mm x 460 mm x 15 mm / Peso: 3.5 kg",
        ],
      },
      {
        title: "Sistema completo",
        items: [
          "Compatibilidad total con soluciones de radiografia digital (DR) para captura, visualizacion y almacenamiento de imagenes",
          "Sistema portatil listo para uso en clinicas, hospitales y trabajo de campo",
          "Certificado Europeo CE MDD para uso medico",
        ],
      },
    ],
  },
  "hf-525-plus": {
    brandLogos: ["/imgs/logos/ecoray.webp"],
    specSections: [
      {
        items: [
          "Generador de alta frecuencia con microprocesador",
          "Potencia maxima: 40 kW",
          "Rango kV: 40 - 125 kV / mA: 10 - 500 mA",
          "288 posiciones de memoria",
          "Pantalla tactil LCD intuitiva",
          "Control de Exposicion Automatica (AEC)",
          "Funcion DAP disponible",
          "Mesa de 4 vias con flotacion suave",
          "Soporte de tubo con rotacion 360°",
          "Bucky de pared con bloqueo electromagnetico",
          "Diseno modular compacto",
          "Alimentacion: 220 V, 50/60 Hz",
        ],
      },
    ],
  },
  "hf-525-plus-digital": {
    brandLogos: ["/imgs/logos/ecoray.webp"],
    specSections: [
      {
        title: "Generador",
        items: [
          "Potencia maxima: 40 kW",
          "Rango kV: 40 - 125 kV / mA: 10 - 500 mA",
          "Pantalla tactil LCD con programacion anatomica (APR)",
          "Mesa de 4 vias con flotacion suave",
          "Soporte de tubo con rotacion 360°",
          "Bucky de pared con bloqueo electromagnetico",
        ],
      },
      {
        title: 'Flat Panel DR 17"x17"',
        items: [
          'Detector a-Si TFT, area activa 17"x17" (430x430 mm)',
          "Matriz de pixeles: 3,072 x 3,072 / Pixel pitch: 143 um",
          "Tiempo de adquisicion de imagen: 5 segundos",
          "Compatible con CR y DR / Estandar DICOM 3.0",
          "Sistema de seguimiento automatico tubo-detector con SID constante",
          "Respaldo en CD/DVD, USB y disco local",
        ],
      },
    ],
  },
  xfm: {
    brandLogos: ["/imgs/logos/ecoray.webp", "/imgs/logos/italray.webp"],
    specSections: [
      {
        items: [
          "Generador de alta frecuencia 40 kW",
          "Totalmente motorizado, manejo con una sola mano",
          "Sistema anticolision sin contacto",
          "Rotacion de brazo 90° izquierda-derecha",
          "Detector inalambrico Wi-Fi, panel plano a-Si / CsI",
          "Bateria de litio - hasta 500 exposiciones por carga",
          "Recarga completa en menos de 2.5 horas",
          'Monitor tactil de 19"',
          "Compatible DICOM 3.0",
          "Almacenamiento de mas de 20,000 imagenes",
        ],
      },
    ],
  },
  "unidad-movil-digital-hf-525-plus": {
    brandLogos: ["/imgs/logos/ecoray.webp"],
    specSections: [
      {
        items: [
          "Generador de alta frecuencia 40 kW",
          "Rango kV: 40 - 125 kV / mA: 10 - 500 mA",
          "288 posiciones de memoria",
          "Pantalla tactil LCD",
          "Programacion anatomica (APR)",
          "Detector flat panel TFT inalambrico",
          "Compatible con solucion DR digital",
          "Movimiento motorizado para control de SID",
          "Diseno compacto para espacios reducidos",
          "Compatible DICOM",
          "Alimentacion: 220 V, 50/60 Hz",
        ],
      },
    ],
  },
  "ultra-100-vet": {
    brandLogos: ["/imgs/logos/ecoray.webp"],
    specSections: [
      {
        items: [
          "Potencia: 5.0 kW / kV: 40-110 / mA: 25-100",
          "Interfaz de control dedicada para veterinaria",
          "Medicion automatica de SID por sensor ultrasonico",
          "Puntero laser dual Clase 1",
          "Memoria PROM: 128 APR",
          "Apto para pequenos animales y equidos",
          "Compatible con solucion DR digital",
          "Peso neto: 16 kg - compacto y portatil",
          "Soporte movil y mesa opcionales",
          "Certificado CE MDD para uso medico",
        ],
      },
    ],
  },
  "sonoscape-e1-exp": {
    brandLogos: ["/imgs/logos/sonoscape.webp"],
    specSections: [
      {
        items: [
          'Pantalla LED HD de 15.6" antiparpadeo, inclinable',
          "Teclado retroiluminado con panel de control inteligente",
          "Bateria con autonomia de 90 minutos",
          "Peso aproximado: 6 kg",
          "Hasta 3 transductores conectables simultaneamente",
          "Disco duro de 500 GB o 1 TB",
          "Doppler color, PW y Power Doppler",
          "Funciones: u-Scan, PIH, SR Flow, Wide Scan, imagenes compuestas espaciales",
          "Auto IMT, Auto Trace, optimizacion automatica de imagen",
          "Compatible DICOM 3.0",
        ],
      },
    ],
  },
  "sonoscape-e2": {
    brandLogos: ["/imgs/logos/sonoscape.webp"],
    specSections: [
      {
        items: [
          'Monitor LCD 15.6" alta resolucion',
          "2 conectores de transductores",
          "Disco duro 500 GB / USB 2.0",
          "Bateria integrada",
          "Doppler color, PW, CW, PDI y TDI",
          "Hasta 80 fps / profundidad 40 cm",
          "u-Scan, THI, Wide Scan",
          "Auto IMT, Auto Trace",
          "Optimizacion automatica de imagen",
          "Compatible DICOM 3.0",
          "Aplicaciones: abdominal, vascular, cardiaco, OB/GYN, musculo-esqueletico, urologia",
        ],
      },
    ],
  },
  "sonoscape-x3": {
    brandLogos: ["/imgs/logos/sonoscape.webp"],
    specSections: [
      {
        items: [
          'Monitor LED 15.6" HD anti-brillo',
          'Pantalla plegable 180° / salidas USB, HDMI, S-Video',
          "Bateria de litio de larga duracion / reemplazable",
          "Disco duro 500 GB",
          "Doppler color, pulsado, poder y tisular / ECG",
          "Procesamiento paralelo Multi-Beam",
          "u-Scan, THI, imagen compuesta espacial",
          "64 canales fisicos / 7 niveles de imagen",
          "Carcasa de magnesio anti-rasguno y anti-colision",
          "Aplicaciones: MSK, vascular, cardio, OB/GYN, tiroides",
        ],
      },
    ],
  },
  "sonoscape-x5": {
    brandLogos: ["/imgs/logos/sonoscape.webp"],
    specSections: [
      {
        items: [
          'Monitor LCD 15.6" HD, anti-parpadeo, rotacion vertical y horizontal',
          "Peso aprox. 4.5 kg",
          "3 conectores de transductores / 128 canales fisicos",
          "Bateria con autonomia de 1.5 h / reemplazable",
          "Wi-Fi y Bluetooth integrados",
          "Doppler color, PW, CW, TDI / ECG",
          "Elastografia / 3D-4D / M color",
          "u-Scan, THI, imagen compuesta espacial",
          "Encendido rapido en 30 segundos",
          "Compatible DICOM / PACS",
        ],
      },
    ],
  },
  "sonoscape-s8-exp": {
    brandLogos: ["/imgs/logos/sonoscape.webp"],
    specSections: [
      {
        items: [
          'Monitor de 15" inclinable hasta 45°',
          "2 conectores de transductores / 64 canales fisicos",
          "Bateria recargable integrada - 90 minutos",
          "Doppler color, PW, CW, PDI y TDI",
          "u-Scan, PHI, imagen compuesta espacial",
          "Elastografia y realce de aguja",
          "Modos 2D, 3D y 4D",
          "Modulo ECG integrado",
          "Teclado con teclas personalizables",
          "Aplicaciones: cardiaco, abdominal, OB/GYN, urologia, MSK",
        ],
      },
    ],
  },
  "sonoscape-s9": {
    brandLogos: ["/imgs/logos/sonoscape.webp"],
    specSections: [
      {
        items: [
          'Monitor LCD 15" inclinable 50°',
          'Panel tactil inteligente de 13.3" con apertura de 140°',
          "2 conectores de transductores / 128 canales fisicos",
          "Bateria extraible - 90 minutos de escaneo",
          "Doppler color, PW, CW, PDI y TDI",
          "3D/4D en tiempo real / Elastografia C-Xlasto",
          "u-Scan, PHI, imagen compuesta espacial",
          "Transductores de 2 - 16 MHz (lineal, convexo, phased array, 4D, TEE, laparoscopico)",
          "Eco Stress / imagen panoramica",
          "Compatible DICOM / Premio iF Design 2014",
        ],
      },
    ],
  },
  "sonoscape-x11": {
    brandLogos: ["/imgs/logos/sonoscape.webp"],
    specSections: [
      {
        items: [
          "Ecografo portatil premium - Plataforma C-Field+",
          'Monitor 15.6" + pantalla tactil 12.3"',
          "Bateria hasta 8 horas con carga magnetica",
          "Hasta 4 sondas simultaneas",
          "Control por voz e Inteligencia Artificial",
          "Probe Auto Wake-Up",
          "Elastografia Strain / CEUS / 3D-4D",
          "Doppler color, PW, CW, TDI / Eco Stress",
          "Herramientas cardiologicas automatizadas",
          "Wi-Fi integrado / DICOM",
        ],
      },
    ],
  },
  "sonoscape-p9-elite": {
    brandLogos: ["/imgs/logos/sonoscape.webp"],
    specSections: [
      {
        items: [
          "Ecografo estacionario de gama alta con rendimiento superior",
          "Monitor de alta resolucion con pantalla tactil",
          "Tecnologia u-Scan de nueva generacion",
          "SR Flow - deteccion de flujo de baja velocidad",
          "Wide Scan - imagen ampliada en tiempo real",
          "3D/4D con renderizado de alta definicion",
          "Doppler color, PW, CW, PDI y TDI",
          "S-Live - imagenes con mayor realismo",
          "Enfocado en salud femenina / OB-GYN",
          "Compatible DICOM / Wi-Fi",
        ],
      },
    ],
  },
  "sonoscape-p12-elite": {
    brandLogos: ["/imgs/logos/sonoscape.webp"],
    specSections: [
      {
        items: [
          'Monitor LED 23.8" + pantalla tactil de 13.3"',
          "4 puertos de conexion activos",
          "Transductores multifrecuencia hasta 192 elementos",
          "Plataforma Cupid con Inteligencia Artificial integrada",
          "u-Scan+ / SR Flow / Wide Scan",
          "S-Live / S-Live Silhouette / S-Depth / Auto Face",
          "3D / 4D / 5D / Elastografia",
          "Doppler color, PW, CW, TDI, PDI",
          "Auto OB / Auto NT / S-Fetus con IA",
          "Sono-Drop: comparte imagenes a smartphones via Wi-Fi",
        ],
      },
    ],
  },
  "sonoscape-p40-elite": {
    brandLogos: ["/imgs/logos/sonoscape.webp"],
    specSections: [
      {
        items: [
          'Monitor 21.5" + pantalla tactil 13.3" con consola ajustable',
          "Plataforma Wis+ con CPU y GPU de alto rendimiento",
          "4 puertos de transductores activos",
          "u-Scan+ / SR Flow / Wide Scan",
          "3D / 4D en tiempo real / Elastografia C-Xlasto",
          "Doppler color, PW, CW, TDI, PDI",
          "Auto NT / Auto IMT / AVC Follicle",
          "Suelo pelvico 4D / Eco Stress",
          "S-Thyroid con clasificacion ACR TI-RADS",
          "Sono-Drop: comparte imagenes a smartphones via Wi-Fi",
        ],
      },
    ],
  },
  "sonoscape-p60": {
    brandLogos: ["/imgs/logos/sonoscape.webp"],
    specSections: [
      {
        items: [
          "Monitor con brazo articulado y panel lateral giratorio con altura ajustable",
          "Plataforma Wis+ con IA integrada",
          "4 puertos de transductores activos",
          "u-Scan+ / SR Flow / Wide Scan",
          "3D / 4D en tiempo real / Elastografia C-Xlasto",
          "Doppler color, PW, CW, TDI, PDI",
          "S-Fetus / S-Thyroid ACR TI-RADS / S-MSK",
          "Analisis cuantitativo miocardico (MQA)",
          "CEUS - ecografia con contraste",
          "Compatible DICOM / Sono-Drop Wi-Fi",
        ],
      },
    ],
  },
  "flat-panel-lg-black-14x17": {
    brandLogos: ["/imgs/logos/lg.webp"],
    specSections: [
      {
        items: [
          "Resolucion: 3,072 x 2,560 pixeles",
          "Tecnologia a-Si TFT / cuerpo de magnesio y fibra de carbono",
          "Conexion alambrica e inalambrica",
          "Bateria: hasta 300 imagenes / 7.5 horas continuas",
          "Hot Swap - cambio de bateria sin apagar el equipo",
          "Tiempo de captura: 1.5 seg. (cable) / 2 seg. (inalambrico)",
          "Clasificacion IP68 - resistente a polvo y agua",
          "Soporta hasta 400 kg de carga",
          "Resistente a caidas hasta 1.5 metros",
          "Compatible con cualquier equipo de rayos X analogico o digital",
        ],
      },
    ],
  },
  "flat-panel-lg-black-17x17": {
    brandLogos: ["/imgs/logos/lg.webp"],
    specSections: [
      {
        items: [
          "Tecnologia a-Si TFT / resolucion de alta definicion",
          "Procesamiento de imagen de 16 bits / pixel pitch de 140 um",
          "Cuerpo de fibra de carbono y magnesio - ligero y resistente",
          "Conexion alambrica e inalambrica",
          "Tiempo de captura: 2 seg. (cable) / 2.5 seg. (inalambrico)",
          "Bateria desmontable - hasta 300 disparos / 8 horas",
          "Clasificacion IP68 - resistente a polvo y agua",
          "Soporta hasta 400 kg de carga uniforme",
          "Compatible con cualquier equipo de rayos X analogico o digital",
        ],
      },
    ],
  },
  "i-max-pro": {
    brandLogos: ["/imgs/logos/owandy.webp"],
    specSections: [
      {
        items: [
          "Panoramico dental ligero - 63 kg",
          "Sensor CMOS de ultima generacion",
          "Resolucion ultra alta de 70 um",
          "Imagenes panoramicas, cefalometricas y 3D",
          "Actualizable de 2D a Cone Beam 3D",
          "24 programas adulto y nino",
          "kV: 60-70 / mA: 2-7",
          "Ocupa menos de 1 m2",
          "Instalacion por un solo tecnico",
          "Posicionamiento cara a cara del paciente",
        ],
      },
    ],
  },
  "i-max-ceph-pro": {
    brandLogos: ["/imgs/logos/owandy.webp"],
    specSections: [
      {
        items: [
          "Panoramico + cefalometrico 4 en 1",
          "Sensor CMOS de ultima generacion",
          "Resolucion ultra alta de 70 um",
          "Imagenes panoramicas, cefalometricas y escaneado 3D",
          "Actualizable de 2D a Cone Beam 3D",
          "Sistema ALI-S - seleccion automatica de cortes",
          "Programas adulto y nino / dosis reducida",
          "AutoMAR - reduccion automatica de artefactos metalicos",
          "Posicionamiento cara a cara del paciente",
          "Compatible con principales software del mercado",
        ],
      },
    ],
  },
  "i-max-3d-xpro": {
    brandLogos: ["/imgs/logos/owandy.webp"],
    specSections: [
      {
        items: [
          "CBCT 4 en 1: panoramica, 3D, cefalometrica y escaneado de objetos",
          "Sensor Super IGZO + CMOS de ultima generacion",
          "Resolucion 70 um / 20 programas 3D",
          "Campo de vision FOV: 16x11 cm hasta 5x5 cm",
          "IA integrada - mejora calidad de imagen hasta 52%",
          "TrueView ART - reconstruccion automatica de nitidez",
          "AutoMAR - reduccion automatica de artefactos metalicos",
          "Disponible en version mural o columna",
          "Actualizable de 2D a Cone Beam 3D",
          "Software QuickVision 3D para planificacion de implantes",
        ],
      },
    ],
  },
  "i-max-3d-ceph-xpro": {
    brandLogos: ["/imgs/logos/owandy.webp"],
    specSections: [
      {
        items: [
          "CBCT cefalometrico mas compacto del mercado",
          "4 en 1: panoramica, 3D, cefalometrica y escaneado de objetos",
          "Sensor Super IGZO + CMOS de ultima generacion",
          "Resolucion 70 um / 20 programas 3D",
          "9 programas cefalometricos / mas de 200 tipos de examenes",
          "FOV: 16x11 cm hasta 5x5 cm",
          "TrueView ART - reconstruccion automatica de nitidez",
          "AutoMAR - reduccion de artefactos metalicos",
          "Analisis cefalometrico con IA integrada",
          "Software QuickVision 3D para planificacion de implantes",
        ],
      },
    ],
  },
  garion: {
    brandLogos: ["/imgs/logos/sghealth.webp"],
    specSections: [
      {
        items: [
          'Flat Panel Digital (FPD) de 9" de alta resolucion',
          "Generador de alta frecuencia 5 kW",
          "Zoom en tiempo real / rotacion de imagen",
          "Inversion positivo/negativo / reduccion de ruido avanzada",
          "Puntero laser dual para posicionamiento preciso Stefano & Masa",
          'Pantalla tactil de 4" / monitor dual',
          "Almacenamiento en formato HIPAA",
          "Integracion con PACS y solucion cloud",
          "Diseno compacto - ahorra espacio en quirofano",
          "Tubo de rayos X rotatorio",
        ],
      },
    ],
  },
  "carmex-rk-fp": {
    brandLogos: ["/imgs/logos/sghealth.webp"],
    specSections: [
      {
        items: [
          "Detector de Panel Plano (FPD) Si de 30x30 cm",
          'Pantalla tactil medica ajustable de 22"',
          "Sin distorsion de imagen - ventaja sobre intensificador tradicional",
          "Fluoroscopia continua y pulsada en tiempo real",
          "Compacto y ligero - alta maniobrabilidad",
          "Aplicaciones: ortopedia, columna, torax, abdomen y vascular",
          "Apto para procedimientos intervencionistas",
          "Almacenamiento digital de imagenes",
          "Compatible con PACS / DICOM",
        ],
      },
    ],
  },
  primus: {
    brandLogos: ["/imgs/logos/osteosys.webp"],
    specSections: [
      {
        items: [
          "Tecnologia DXA haz en abanico - cuerpo completo",
          "Detectores multicanal - alta velocidad",
          "Analisis DMO, T-Score, Z-Score, IMC",
          "Composicion corporal: grasa, magra, osea",
          "LVA - deteccion de fracturas vertebrales",
          "FRAX - riesgo de fractura a 10 anos",
          "TBS iNsight - microarquitectura osea",
          "Funcion pediatrica y ortopedica",
          "Exclusion automatica de protesis metalicas",
          "Panel tactil intuitivo / DICOM",
        ],
      },
    ],
  },
  "sonoscape-e1-exp-vet": {
    brandLogos: ["/imgs/logos/sonoscape.webp"],
    specSections: [
      {
        items: [
          'Monitor LED HD 15.6" / inclinable',
          "2 puertos de transductores",
          "Bateria integrada - 90 minutos",
          "Peso 6.5 kg - compacto y portatil",
          "u-Scan, PIH, Wide Scan",
          "Doppler PW / Chroma",
          "Software veterinario especializado",
          "Canino, felino, bovino, equino y exoticos",
          "Tablas gestacionales por especie",
          "Carcasa reforzada anti-polvo / anti-salpicaduras",
          "Compatible DICOM",
        ],
      },
    ],
  },
  "sonoscape-x3-vet": {
    brandLogos: ["/imgs/logos/sonoscape.webp"],
    specSections: [
      {
        items: [
          'Monitor LED HD 15.6" anti-brillo / plegable 180°',
          "3 conectores de transductores",
          "Bateria integrada - 90 minutos",
          "Carcasa de magnesio - ligero y resistente",
          "Doppler color, PW, TDI / ECG",
          "u-Scan, THI, imagen compuesta",
          "Wi-Fi y Bluetooth integrados",
          "Software veterinario: equidos y pequenos animales Tmamedica",
          "Disco duro 500 GB / salidas USB, HDMI",
          "Compatible DICOM",
        ],
      },
    ],
  },
  "sonoscape-x5-vet": {
    brandLogos: ["/imgs/logos/sonoscape.webp"],
    specSections: [
      {
        items: [
          'Monitor LED HD 15.6" / anti-brillo',
          "3 conectores de transductores",
          "Bateria integrada - 1.5 horas",
          "Sistema silencioso para no asustar animales",
          "Doppler color, PW, CW, TDI / ECG",
          "u-Scan, THI, imagen compuesta",
          "Software veterinario profesional - amplia variedad de especies",
          "Transductores especiales y software para equidos",
          "Wi-Fi y Bluetooth integrados",
          "Compatible DICOM / PACS",
        ],
      },
    ],
  },
  "sonoscape-propet-60": {
    brandLogos: ["/imgs/logos/sonoscape.webp"],
    specSections: [
      {
        items: [
          'Monitor 23.8" + pantalla tactil 13.3"',
          "5 puertos de transductores / memoria 1 TB",
          "Gel calentador integrado",
          "Doppler color, PW, CW, TDI",
          "Elastografia en tiempo real",
          "3D / 4D / Wide Scan / u-Scan",
          "Software veterinario - mas de 200 marcas corporales",
          "Modo flexible por especie con un solo clic",
          "Mascotas, grandes animales y equidos",
          "Compatible DICOM 3.0",
        ],
      },
    ],
  },
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
  brandLogos: productDetails[product.slug]?.brandLogos ?? [],
  specSections: productDetails[product.slug]?.specSections ?? [],
  image: `/imgs/equipments/${product.slug}.jpg`,
  mobility: mobilityByFormat[product.format] ?? "fijo",
}));
