export type Sev = 'ALTA' | 'MED' | 'BAJA'

export type Restaurant = {
  slug: string
  nombre: string
  logo: string
  reviews: number
  rating: number
  /* Pulso: [14 días, 60 días, histórico] */
  pulso: {
    ratingProm: [string, string, string]
    reviews: [string, string, string]
    pct12: [string, string, string]
    pctResp: [string, string, string]
  }
  tendencia: string
  tendenciaTexto: string
  problemas: {
    problema: string
    d14: number
    d60: number
    hist: number
    sev: Sev
    quote?: { texto: string; meta: string }
  }[]
  elogios: { elogio: string; d14: number; d60: number; hist: number }[]
  alertas: { nuevo: string; escalando: string; resuelto: string; eterno: string }
  staff: string
  accion: { titulo: string; texto: string }
}

export const RESTAURANTES: Restaurant[] = [
  {
    slug: 'lardito',
    nombre: 'Lardito',
    logo: '/lardito.jpg',
    reviews: 152,
    rating: 4.6,
    pulso: {
      ratingProm: ['4.8★', '4.7★', '4.6★'],
      reviews: ['10', '35', '152'],
      pct12: ['0%', '0%', '3.3%'],
      pctResp: ['0%', '2.9%', '0.7%'],
    },
    tendencia: 'Mejorando',
    tendenciaTexto:
      'Las últimas 2 semanas están impecables (4.8, sin negativas). Lo que ensucia el histórico es de hace 2-7 meses.',
    problemas: [
      {
        problema:
          'Atención inconsistente: mozos apurados/ausentes o trato frío al recibir y levantar platos',
        d14: 2,
        d60: 3,
        hist: 9,
        sev: 'MED',
        quote: {
          texto:
            'La atención de la moza y del chico que nos recibió no fue con buena energía… Dar una carta y no explicar absolutamente nada de la misma, levantar con platos sin un "permiso puedo levantar?"',
          meta: 'hace 22 días · 3★ · Local Guide',
        },
      },
      {
        problema: 'Caro / porciones chicas para el precio',
        d14: 1,
        d60: 2,
        hist: 11,
        sev: 'BAJA',
        quote: {
          texto:
            'La comida, gourmet pero de tan chicas que son las raciones, no terminas de disfrutarlas y el precio es caro.',
          meta: '2★ · Local Guide',
        },
      },
      {
        problema: 'Ruido + mal control de climatización (te toca debajo del AC)',
        d14: 1,
        d60: 2,
        hist: 5,
        sev: 'MED',
        quote: {
          texto:
            'Ambiente: muy ruidoso, malo control de la climatización (te toca abajo del aire acondicionado y vas a comer incómodo).',
          meta: '3★',
        },
      },
    ],
    elogios: [
      { elogio: 'Lugar lindo / estética / patio', d14: 3, d60: 9, hist: 26 },
      { elogio: 'Volvería / recomiendo / buena onda', d14: 1, d60: 7, hist: 29 },
      { elogio: 'Carta de vinos + sommelier', d14: 1, d60: 4, hist: 19 },
      { elogio: 'Comida rica (platitos)', d14: 2, d60: 3, hist: 7 },
    ],
    alertas: {
      nuevo: 'Nada negativo nuevo — 14d limpio.',
      escalando: 'Nada.',
      resuelto:
        'El cobro raro del "agua de cortesía" facturada como mineral (hace ~7 meses, no reaparece).',
      eterno:
        'Atención inconsistente y percepción precio/porción — siguen apareciendo (último, hace 22 días).',
    },
    staff:
      'Sin nombre recurrente. Elogios genéricos al sommelier y a "el muchacho de rulos". (Menciones sueltas: Gabriela, Sebastián.)',
    accion: {
      titulo: 'Guion de servicio para mozos',
      texto:
        'Recibir con sonrisa → explicar la carta → pedir permiso antes de levantar platos. Es el único reclamo "eterno" y lo único que mancha un 4.8 reciente.',
    },
  },
  {
    slug: 'parrilla-maravilla',
    nombre: 'Parrilla Maravilla',
    logo: '/parrilla-maravilla.png',
    reviews: 151,
    rating: 4.6,
    pulso: {
      ratingProm: ['4.7★', '4.7★', '4.6★'],
      reviews: ['6', '38', '151'],
      pct12: ['0%', '2.6%', '4.6%'],
      pctResp: ['0%', '0%', '0%'],
    },
    tendencia: 'Mejorando',
    tendenciaTexto:
      'Pico de quejas fue hace ~3 meses (domingos), hoy más estable.',
    problemas: [
      {
        problema: 'Carne/pollo servido crudo o mal cocido — y se niegan a recocinar',
        d14: 0,
        d60: 1,
        hist: 7,
        sev: 'ALTA',
        quote: {
          texto:
            'Me trajeron un pollo crudo y no me lo quisieron cambiar… los fideos de la carta dicen ser unos y después te traen otros.',
          meta: 'hace 78 días · 1★ · Local Guide',
        },
      },
      {
        problema: 'Falta de personal / servicio lento en picos (domingos)',
        d14: 0,
        d60: 1,
        hist: 6,
        sev: 'MED',
        quote: {
          texto:
            'No dan a basto con tan pocos mozos para tanta gente, pedí tres veces cubiertos y me tocó pararme para pedir unos en la barra.',
          meta: '1★',
        },
      },
      {
        problema: 'Comida sin sal / insípida',
        d14: 0,
        d60: 0,
        hist: 5,
        sev: 'MED',
        quote: {
          texto: 'Todos los platos estaban sin sal (grave), sobre todo la carne y las alitas.',
          meta: '3★ · Local Guide',
        },
      },
      {
        problema: 'Ambiente muy ruidoso / oscuro / olor a cigarrillo adentro',
        d14: 0,
        d60: 1,
        hist: 5,
        sev: 'MED',
        quote: {
          texto:
            'En el interior hay mucho olor a cigarrillo. Eso fue muy malo. Servicio amable, pero lento y confuso.',
          meta: '3★ · Local Guide',
        },
      },
    ],
    elogios: [
      { elogio: 'Lugar/estética moderna + patio', d14: 1, d60: 7, hist: 35 },
      { elogio: 'Volvería / recomiendo', d14: 1, d60: 6, hist: 31 },
      { elogio: 'Atención (cuando hay equipo)', d14: 0, d60: 1, hist: 12 },
      { elogio: 'Cortes + papas fritas', d14: 1, d60: 1, hist: 10 },
    ],
    alertas: {
      nuevo: 'Nada — 14d sin negativas (n=6).',
      escalando: 'Nada activo.',
      resuelto:
        'El colapso de servicio de los domingos (concentrado hace 2.5-3 meses) bajó de intensidad.',
      eterno:
        'Cocción de carne/pollo crudo — riesgo de inocuidad y agravado por no querer recambiar el plato. Además, cobro mal (valores distintos a la carta) — aislado pero severo (ALTA), vigilar.',
    },
    staff: 'Leandro · 3 menciones positivas. Felipe · 2 · Jonás · 2 · Joaquín · 1.',
    accion: {
      titulo: 'Control de cocción obligatorio (pollo y carne)',
      texto:
        'Chequeo antes de salir de cocina + política de recocción inmediata sin discutir con el cliente. Es el problema ALTA y, paradójicamente, la firma de la marca.',
    },
  },
  {
    slug: 'las-patriotas',
    nombre: 'Las Patriotas Vilardo',
    logo: '/las-patriotas.jpg',
    reviews: 52,
    rating: 4.6,
    pulso: {
      ratingProm: ['5.0★', '4.8★', '4.6★'],
      reviews: ['3', '18', '52'],
      pct12: ['0%', '0%', '3.8%'],
      pctResp: ['0%', '0%', '0%'],
    },
    tendencia: 'Mejorando',
    tendenciaTexto:
      'El más chico en volumen, pero el de mejor curva (5.0 reciente). Casi sin quejas.',
    problemas: [
      {
        problema: 'Personal escaso en horas pico (viernes/sáb noche)',
        d14: 0,
        d60: 0,
        hist: 2,
        sev: 'MED',
        quote: {
          texto:
            'La atención fue regular; se notaba poco personal para un viernes por la noche de enero.',
          meta: '3★ · Local Guide',
        },
      },
      {
        problema: 'Precio alto (vino y comida)',
        d14: 0,
        d60: 1,
        hist: 3,
        sev: 'BAJA',
        quote: {
          texto:
            'Los precios son altos tanto en vino como en comida… vinos de tan poco costo en este bar están muy caros.',
          meta: '3★ · Local Guide',
        },
      },
    ],
    elogios: [
      { elogio: 'Ambiente acogedor / "joyita escondida"', d14: 1, d60: 4, hist: 9 },
      { elogio: 'Selección de vinos + música', d14: 1, d60: 1, hist: 4 },
    ],
    alertas: {
      nuevo: 'Nada.',
      escalando: 'Nada.',
      resuelto: '—',
      eterno:
        'Ninguno sostenido. Incidente aislado ALTA (hace ~7 meses): empleado mayor "de rodete" levantó la voz a clientes por una vianda de afuera con la cocina cerrada — maltrato, episodio único, vigilar que no se repita.',
    },
    staff: 'Nadie nombrado (positivo ni negativo).',
    accion: {
      titulo: 'Reforzar dotación viernes/sábado a la noche',
      texto:
        'Único patrón operativo repetido. Y empezar a responder reviews: con 4.6★ subiendo, responder bien rinde más que en ningún otro local.',
    },
  },
  {
    slug: 'lardo-rosemary',
    nombre: 'Lardo & Rosemary',
    logo: '/lardo-rosemary.jpg',
    reviews: 64,
    rating: 4.60,
    pulso: {
      ratingProm: ['4.75★', '4.79★', '4.60★'],
      reviews: ['6', '20', '64'],
      pct12: ['0%', '0%', '3%'],
      pctResp: ['0%', '0%', '0%'],
    },
    tendencia: 'Estable',
    tendenciaTexto:
      'Sube desde el histórico con mínima variación entre ventanas recientes. Sin problemas operativos agudos.',
    problemas: [
      {
        problema: 'Sin opciones para celíacos (sin TACC)',
        d14: 0,
        d60: 0,
        hist: 2,
        sev: 'MED' as const,
        quote: {
          texto:
            'No tienen opciones para celiacos. Que alguien les avise que es el 2026 así se agiornan.',
          meta: '1★ · 2026-02-18',
        },
      },
      {
        problema: 'Porciones chicas / precio elevado',
        d14: 1,
        d60: 2,
        hist: 9,
        sev: 'BAJA' as const,
        quote: {
          texto:
            'Muy rico, un poco caro y se pasa de cool. Lindo ambiente. Conviene ir con reserva.',
          meta: '4★ · 2026-01-27',
        },
      },
      {
        problema: 'Postres flojos',
        d14: 0,
        d60: 0,
        hist: 2,
        sev: 'BAJA' as const,
        quote: {
          texto:
            'Los postres bastante flojos. Usé dos bigbox por todo lo que ven en las fotos. 100% recomendada la experiencia la verdad.',
          meta: '4★ · 2026-05-02',
        },
      },
      {
        problema: 'Sin cambiador para bebés',
        d14: 0,
        d60: 0,
        hist: 1,
        sev: 'MED' as const,
        quote: {
          texto:
            'Muy buena la comida la carta de vinos y la atención. Muy malo que no tengan cambiador para bebés.',
          meta: '3★ · 2025-11-04',
        },
      },
    ],
    elogios: [
      { elogio: 'Ambiente íntimo / cálido', d14: 2, d60: 6, hist: 17 },
      { elogio: 'Comida creativa / deliciosa', d14: 1, d60: 4, hist: 15 },
      { elogio: 'Atención excelente', d14: 2, d60: 6, hist: 14 },
      { elogio: 'Carta de vinos', d14: 2, d60: 5, hist: 13 },
    ],
    alertas: {
      nuevo: 'Sin reseñas de 1-2★ en los últimos 14 días. Hay mención de precio/porciones dentro de un review de 5★ — no es queja formal pero confirma que la percepción persiste.',
      escalando: 'Nada.',
      resuelto: 'Nada que se haya resuelto (problemas actuales son estructurales o de baja frecuencia).',
      eterno:
        'Porciones/precio (aceptado por el concepto, mencionado incluso en reseñas de 5★). Sin TACC (sin señal de que se haya trabajado). Sin cambiador (accionable, bajo costo).',
    },
    staff:
      'Ramiro (encargado): 1 mención positiva ("muy atento y explicando cada detalle de cada plato"). Juani: 1 mención positiva.',
    accion: {
      titulo: 'Incorporar opciones gluten-free en la carta',
      texto:
        'El único 1★ en el dataset es por ausencia de opciones sin TACC. Incorporar 2 opciones gluten-free claramente señalizadas en la carta es la acción de mayor retorno reputacional disponible: convierte una crítica de 1★ recurrente en un diferenciador.',
    },
  },
]

export const COMPARATIVA = {
  patrones: [
    {
      patron: 'Respuestas del dueño casi nulas en Google',
      lardito: '≈1%',
      parrilla: '0%',
      patriotas: '0%',
      lardoRosemary: '0%',
      lectura:
        'Lardito tiene 1 respuesta sobre 151 reviews; los otros 3 en 0% — los 1-2★ quedan sin respuesta pública en todo el grupo.',
    },
    {
      patron: 'Atención excelente como fortaleza',
      lardito: 'Sí',
      parrilla: 'Sí',
      patriotas: 'Sí',
      lardoRosemary: 'Sí',
      lectura:
        'Activo diferenciador compartido — cultura de servicio sólida en los 4 locales.',
    },
    {
      patron: 'Ambiente / diseño como valor',
      lardito: 'Sí',
      parrilla: 'Sí',
      patriotas: 'Sí',
      lardoRosemary: 'Sí',
      lectura:
        'Los 4 locales usan el espacio como argumento gastronómico.',
    },
    {
      patron: 'Porciones chicas / precio caro',
      lardito: 'Sí',
      parrilla: 'No',
      patriotas: 'Sí',
      lardoRosemary: 'Sí',
      lectura:
        '3 de 4 conceptos generan esta fricción — gestión comunicacional pendiente.',
    },
    {
      patron: 'Carta de vinos como propuesta clave',
      lardito: 'Sí',
      parrilla: 'Sí',
      patriotas: 'Sí',
      lardoRosemary: 'Sí',
      lectura:
        'El vino es el hilo conductor del grupo.',
    },
    {
      patron: 'Clientes internacionales frecuentes',
      lardito: 'Sí',
      parrilla: 'Sí',
      patriotas: 'Sí',
      lardoRosemary: 'Sí',
      lectura:
        'Presencia turística en todos — oportunidad de reviews en inglés no capturada.',
    },
  ],
  haceBien: [
    {
      marca: 'Lardito',
      texto:
        'El sommelier como operador visible genera confianza y fidelidad. Los otros locales no tienen un rol así de identificado públicamente.',
    },
    {
      marca: 'Parrilla Maravilla',
      texto:
        'Staff nombrado individualmente en reseñas (6 nombres distintos). La personalización del servicio es más fuerte que en los otros 3.',
    },
    {
      marca: 'Las Patriotas',
      texto:
        'Bartender como cara del local (Patricio/Pato). Modelo replicable: 1 persona = imagen del lugar. Además, el mejor momentum actual (5.0★ en 14d).',
    },
    {
      marca: 'Lardo & Rosemary',
      texto:
        'El concepto más consistente en calidad: menor dispersión de quejas, sin problemas operativos agudos.',
    },
  ],
  puntos: [
    {
      titulo: 'Política de respuesta a reviews (~0% en los 4 locales)',
      texto:
        'Lardito tiene 1 respuesta sobre 151 reviews; los otros 3 están en 0%. Los 1★ y 2★ quedan sin respuesta pública en prácticamente todo el grupo. Una respuesta profesional a una mala reseña vale más que 5 nuevas de 5★ en términos de percepción de nuevos visitantes. Implementar protocolo de respuesta en 48hs para reseñas de 1-2★.',
    },
    {
      titulo: 'Servicio del domingo en Parrilla Maravilla (5 meses sin resolver)',
      texto:
        'Es un agujero operativo puro de dimensionamiento de personal, no de cocina ni de producto. Seguirá generando reviews de 1★ que arrastran el promedio si no se actúa.',
    },
    {
      titulo: 'Expectativas de precio/porción (3 de 4 conceptos)',
      texto:
        'Los clientes llegan sin entender el modelo de tapeo. Ningún local lo comunica proactivamente. Un simple "sugerimos 2-3 platos por persona" al inicio de la mesa reduciría la fricción sin cambiar nada del producto.',
    },
  ],
}
