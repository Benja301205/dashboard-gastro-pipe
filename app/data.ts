export type Sev = 'ALTA' | 'MEDIA' | 'BAJA'
export type Health = 'verde' | 'amarillo' | 'rojo'

export type Branch = {
  slug: string
  rank: number
  nombre: string
  short: string
  reviews: number
  ratingHist: string
  rating60d: string
  pct12_60d: string
  respuestaDueno: string
  estado: Health
  pulso: {
    d14: string
    d60: string
    hist: string
  }
  tendencia: string
  tendenciaDetalle: string
  problemas: {
    problema: string
    d14: number
    d60: number
    hist: number
    sev: Sev
    estado: string
  }[]
  citas: string[]
  elogios: string
  accion: string
}

export const LOGO = '/contame-logo.jpeg'

export const SUCURSALES: Branch[] = [
  {
    slug: 'belgrano',
    rank: 1,
    nombre: 'Dean & Dennys - Belgrano',
    short: 'Belgrano',
    reviews: 92,
    ratingHist: '4.2★',
    rating60d: '4.3★',
    pct12_60d: '10%',
    respuestaDueno: '3%',
    estado: 'verde',
    pulso: {
      d14: '4.0★ / 4 reviews / 17% 1-2★ / 33% resp',
      d60: '4.3★ / 41 / 10% / 3%',
      hist: '4.2★ / 92 / 12% / 3%',
    },
    tendencia: '➡️ estable',
    tendenciaDetalle: 'Cliente internacional detectado.',
    problemas: [
      { problema: 'Atención mala / cajera', d14: 0, d60: 3, hist: 5, sev: 'ALTA', estado: '🔥' },
      { problema: 'Precio/porciones', d14: 3, d60: 5, hist: 12, sev: 'BAJA', estado: '🔁' },
      { problema: 'Ambiente/calor/promos', d14: 0, d60: 4, hist: 12, sev: 'MEDIA', estado: '🔁' },
    ],
    citas: ['mala.omda de la cajera', 'Lentísimo el servicio, más de 40 minutos estuve', 'no estaba prendido el aire'],
    elogios: 'Buena atención 21 en 60d; producto rico 4 en 60d. Staff: Martín, 4 positivas.',
    accion: 'Reforzar protocolo de caja y salón en merienda/promos; responder los negativos recientes.',
  },
  {
    slug: 'belgrano-r',
    rank: 2,
    nombre: 'Dean & Dennys - Belgrano R',
    short: 'Belgrano R',
    reviews: 34,
    ratingHist: '3.5★',
    rating60d: '3.5★',
    pct12_60d: '0%',
    respuestaDueno: '0%',
    estado: 'amarillo',
    pulso: {
      d14: '4.0★ / 3 / 0% / 0%',
      d60: '3.5★ / 5 / 0% / 0%',
      hist: '3.5★ / 34 / 33% / 0%',
    },
    tendencia: '📈 mejorando',
    tendenciaDetalle: 'Baja muestra reciente.',
    problemas: [
      { problema: 'Espera/delivery', d14: 2, d60: 6, hist: 8, sev: 'MEDIA', estado: '🔥' },
      { problema: 'Limpieza', d14: 0, d60: 4, hist: 6, sev: 'ALTA', estado: '🔥' },
      { problema: 'Pedido mal armado', d14: 0, d60: 2, hist: 2, sev: 'ALTA', estado: '🆕' },
    ],
    citas: ['esperas mínimo una hora', 'la limpieza deja mucho que desear', 'me trajeron mal la hamburguesa'],
    elogios: 'Producto rico 1 en 60d; rapidez 1 en 60d.',
    accion: 'Separar cola delivery/retiro y checklist visible de limpieza por franja.',
  },
  {
    slug: 'dean-dennys',
    rank: 3,
    nombre: 'Dean & Dennys',
    short: 'Dean & Dennys',
    reviews: 28,
    ratingHist: '3.6★',
    rating60d: '3.8★',
    pct12_60d: '32%',
    respuestaDueno: '0%',
    estado: 'amarillo',
    pulso: {
      d14: '4.3★ / 10 / 17% / 0%',
      d60: '3.8★ / 14 / 32% / 0%',
      hist: '3.6★ / 28 / 34% / 0%',
    },
    tendencia: '📈 mejorando',
    tendenciaDetalle: 'Repunte reciente con todavía muchas menciones operativas.',
    problemas: [
      { problema: 'Producto frío', d14: 2, d60: 4, hist: 8, sev: 'MEDIA', estado: '🔥' },
      { problema: 'Demora cocina', d14: 0, d60: 4, hist: 10, sev: 'MEDIA', estado: '🔁' },
      { problema: 'Reclamo sin respuesta', d14: 2, d60: 4, hist: 4, sev: 'ALTA', estado: '🔥' },
    ],
    citas: ['me llegó todo frío', 'Tardan mucho en la cocina', 'debut y despedida nunca más pido'],
    elogios: 'Producto rico 6 en 60d; buena atención 4 en 60d. Staff: Erik, 1 positiva.',
    accion: 'Medir tiempo cocina-delivery y responder los casos de comida fría.',
  },
  {
    slug: 'caballito',
    rank: 4,
    nombre: 'Dean & Dennys - Caballito',
    short: 'Caballito',
    reviews: 22,
    ratingHist: '3.1★',
    rating60d: '3.8★',
    pct12_60d: '33%',
    respuestaDueno: '0%',
    estado: 'amarillo',
    pulso: {
      d14: '0 reviews',
      d60: '3.8★ / 7 / 33% / 0%',
      hist: '3.1★ / 22 / 44% / 0%',
    },
    tendencia: '📈 mejorando',
    tendenciaDetalle: 'Sin muestra 14d.',
    problemas: [
      { problema: 'Producto crudo/frío', d14: 0, d60: 2, hist: 4, sev: 'ALTA', estado: '🔥' },
      { problema: 'Local orientado a delivery', d14: 0, d60: 1, hist: 8, sev: 'MEDIA', estado: '🔁' },
      { problema: 'Atención/espera histórica', d14: 0, d60: 0, hist: 8, sev: 'ALTA', estado: '📉' },
    ],
    citas: ['una vino cruda', 'hamburguesa fría', 'Puro delivery'],
    elogios: 'Atención cordial y comida rica en 60d.',
    accion: 'Doble control de cocción y prioridad mínima para cliente presencial.',
  },
  {
    slug: 'devoto',
    rank: 5,
    nombre: 'Dean & Dennys Devoto',
    short: 'Devoto',
    reviews: 70,
    ratingHist: '3.7★',
    rating60d: '3.6★',
    pct12_60d: '38%',
    respuestaDueno: '8%',
    estado: 'rojo',
    pulso: {
      d14: '2.8★ / 5 / 56% / 0%',
      d60: '3.6★ / 15 / 38% / 8%',
      hist: '3.7★ / 70 / 29% / 20%',
    },
    tendencia: '📉 empeorando',
    tendenciaDetalle: 'Mayor deterioro: 14d cae a 2.8★ con 56% 1-2★.',
    problemas: [
      { problema: 'Atención mala', d14: 1, d60: 1, hist: 3, sev: 'ALTA', estado: '🆕' },
      { problema: 'Demoras', d14: 2, d60: 4, hist: 13, sev: 'MEDIA', estado: '🔁' },
      { problema: 'Ambiente/promos no vigentes', d14: 2, d60: 6, hist: 13, sev: 'MEDIA', estado: '🔥' },
    ],
    citas: ['Pésima atención', 'todo muy demorado', 'promociones en pantalla no vigentes'],
    elogios: 'Producto rico 5 en 60d; buena atención 2 en 60d.',
    accion: 'Auditoría express de comunicación de promos + brief obligatorio de trato y tiempos por turno.',
  },
  {
    slug: 'flores',
    rank: 6,
    nombre: 'Dean & Dennys - Flores',
    short: 'Flores',
    reviews: 25,
    ratingHist: '2.8★',
    rating60d: '3.4★',
    pct12_60d: '45%',
    respuestaDueno: '9%',
    estado: 'amarillo',
    pulso: {
      d14: '0 reviews',
      d60: '3.4★ / 8 / 45% / 9%',
      hist: '2.8★ / 25 / 51% / 3%',
    },
    tendencia: '📈 mejorando',
    tendenciaDetalle: 'Base histórica débil.',
    problemas: [
      { problema: 'Producto mal cocido/frío', d14: 0, d60: 2, hist: 5, sev: 'ALTA', estado: '🔁' },
      { problema: 'Precio/valor', d14: 0, d60: 3, hist: 6, sev: 'BAJA', estado: '🔁' },
      { problema: 'Baño/reclamo', d14: 0, d60: 4, hist: 7, sev: 'ALTA', estado: '🔥' },
    ],
    citas: ['pan apelmazado medio crudo y frío', 'carísimo', 'no te dejen usar el baño'],
    elogios: 'Atención, limpieza y ambiente aparecen positivos en 60d.',
    accion: 'Control de cocción/temperatura antes de despacho y regla clara de baño para clientes.',
  },
  {
    slug: 'la-horqueta',
    rank: 7,
    nombre: 'Dean & Dennys - La Horqueta',
    short: 'La Horqueta',
    reviews: 28,
    ratingHist: '3.7★',
    rating60d: '2.7★',
    pct12_60d: '50%',
    respuestaDueno: '0%',
    estado: 'rojo',
    pulso: {
      d14: '5.0★ / 1 / 0% / 0%',
      d60: '2.7★ / 4 / 50% / 0%',
      hist: '3.7★ / 28 / 32% / 0%',
    },
    tendencia: '📉 empeorando',
    tendenciaDetalle: 'Baja muestra reciente.',
    problemas: [
      { problema: 'Atención / servicio', d14: 0, d60: 1, hist: 2, sev: 'ALTA', estado: '🔥' },
      { problema: 'Demora', d14: 0, d60: 2, hist: 3, sev: 'MEDIA', estado: '🔁' },
      { problema: 'Promesa de promo/cambio', d14: 0, d60: 2, hist: 2, sev: 'ALTA', estado: '🆕' },
    ],
    citas: ['Pésimo servicio', 'Tardaron en entregar el pedido', 'Hacen publicidad de que se pueden cambiar'],
    elogios: 'Limpieza positiva histórica; producto rico reciente.',
    accion: 'Alinear caja con menú/promos reales y revisar entrega de pedidos en picos.',
  },
  {
    slug: 'lomas-de-zamora',
    rank: 8,
    nombre: 'Dean & Dennys - Lomas de Zamora',
    short: 'Lomas de Zamora',
    reviews: 12,
    ratingHist: '3.4★',
    rating60d: '2.0★',
    pct12_60d: '57%',
    respuestaDueno: '0%',
    estado: 'rojo',
    pulso: {
      d14: '1.0★ / 1 / 100% / 0%',
      d60: '2.0★ / 5 / 57% / 0%',
      hist: '3.4★ / 12 / 37% / 0%',
    },
    tendencia: '📉 empeorando',
    tendenciaDetalle: 'Baja muestra reciente.',
    problemas: [
      { problema: 'Pedido incompleto / no se hacen cargo', d14: 0, d60: 2, hist: 2, sev: 'ALTA', estado: '🆕' },
      { problema: 'Alergia / pedido mal enviado', d14: 0, d60: 2, hist: 2, sev: 'ALTA', estado: '🆕' },
      { problema: 'Espera por promo', d14: 2, d60: 2, hist: 2, sev: 'MEDIA', estado: '🆕' },
    ],
    citas: ['no envían las papas', 'el comensal es ALERGICO', 'esperamos más de 30 minutos'],
    elogios: 'Producto rico histórico, pero sin sostén reciente.',
    accion: 'Protocolo obligatorio para alergias y faltantes con compensación inmediata.',
  },
  {
    slug: 'dot',
    rank: 9,
    nombre: 'Dean & Dennys - Dot',
    short: 'Dot',
    reviews: 15,
    ratingHist: '2.8★',
    rating60d: '2.0★',
    pct12_60d: '75%',
    respuestaDueno: '0%',
    estado: 'rojo',
    pulso: {
      d14: '5.0★ / 1 / 0% / 0%',
      d60: '2.0★ / 5 / 75% / 0%',
      hist: '2.8★ / 15 / 48% / 0%',
    },
    tendencia: '📉 empeorando',
    tendenciaDetalle: 'Baja muestra reciente.',
    problemas: [
      { problema: 'Frío por prioridad apps', d14: 0, d60: 2, hist: 2, sev: 'MEDIA', estado: '🆕' },
      { problema: 'Pedido incompleto', d14: 0, d60: 2, hist: 2, sev: 'ALTA', estado: '🆕' },
      { problema: 'Promo rechazada', d14: 0, d60: 2, hist: 2, sev: 'ALTA', estado: '🆕' },
    ],
    citas: ['estaban todas muy frías', 'Pedido incompleto', 'no me quisieron hacer la promo de 2x1'],
    elogios: 'Producto rico aparece, pero muy tapado por fallas operativas.',
    accion: 'Revisar cumplimiento de promos y control de pedidos antes de entregar.',
  },
  {
    slug: 'abasto',
    rank: 10,
    nombre: 'Dean & Dennys - Abasto',
    short: 'Abasto',
    reviews: 6,
    ratingHist: '2.3★',
    rating60d: '1.8★',
    pct12_60d: '80%',
    respuestaDueno: '0%',
    estado: 'rojo',
    pulso: {
      d14: '2.3★ / 2 / 67% / 0%',
      d60: '1.8★ / 3 / 80% / 0%',
      hist: '2.3★ / 6 / 67% / 0%',
    },
    tendencia: '📉 empeorando',
    tendenciaDetalle: 'Mayor riesgo reputacional: baja muestra reciente, 80% negativo 60d y antecedente de higiene grave.',
    problemas: [
      { problema: 'No atienden por deliveries', d14: 2, d60: 2, hist: 2, sev: 'ALTA', estado: '🆕' },
      { problema: 'Pedido marcado listo sin estarlo', d14: 0, d60: 2, hist: 2, sev: 'MEDIA', estado: '🆕' },
      { problema: 'Higiene/plaga histórica', d14: 0, d60: 0, hist: 1, sev: 'ALTA', estado: '🔁' },
    ],
    citas: ['dejan de atender al público', 'marcan los pedidos listos y estan en preparacion', 'CUCARACHA'],
    elogios: 'Casi sin señal positiva útil.',
    accion: 'Auditoría sanitaria + regla de atención presencial aunque cocina esté saturada.',
  },
]

export const RESUMEN = {
  mejor: 'Belgrano: alto rating 60d y volumen suficiente.',
  deterioro: 'Devoto: 14d cae a 2.8★ con 56% 1-2★.',
  riesgo: 'Abasto: baja muestra reciente, 80% negativo 60d y antecedente de higiene grave.',
}

export const COMPARATIVA = {
  patrones: [
    {
      patron: 'Demoras/cocina saturada',
      sucursales: 'Abasto, Devoto, Belgrano R, La Horqueta, Dean & Dennys, Belgrano',
      lectura: 'El cuello de botella aparece tanto en salón como delivery.',
      prioridad: 'ALTA',
    },
    {
      patron: 'Producto frío o mal preparado',
      sucursales: 'Dean & Dennys, Dot, Flores, Caballito, Lomas, Devoto',
      lectura: 'La marca pierde consistencia en temperatura/cocción.',
      prioridad: 'ALTA',
    },
    {
      patron: 'Delivery/apps desplazan salón',
      sucursales: 'Abasto, Dot, Caballito, Belgrano R, Lomas',
      lectura: 'Genera espera, abandono y mala percepción presencial.',
      prioridad: 'ALTA',
    },
    {
      patron: 'Promos mal comunicadas',
      sucursales: 'Dot, Devoto, La Horqueta, Belgrano, Lomas',
      lectura: 'Riesgo de enojo por expectativa incumplida/cobro percibido como injusto.',
      prioridad: 'MEDIA',
    },
    {
      patron: 'Respuesta del dueño baja',
      sucursales: '8 de 10 locales',
      lectura: 'Reclamos recientes quedan sin contención pública.',
      prioridad: 'ALTA',
    },
    {
      patron: 'Limpieza/baños',
      sucursales: 'Abasto, Belgrano R, Flores, Belgrano',
      lectura: 'Pocas menciones, pero de severidad alta.',
      prioridad: 'ALTA',
    },
  ],
  haceBien: [
    { marca: 'Belgrano', texto: 'Mejor combinación de volumen, rating y staff nombrado positivamente.' },
    { marca: 'Devoto', texto: 'Buen histórico de producto y mayor hábito de respuesta del dueño.' },
    { marca: 'Belgrano R', texto: 'Mejora reciente y percepción de rapidez cuando opera bien.' },
    { marca: 'La Horqueta', texto: 'Limpieza/ambiente positivos en histórico.' },
    { marca: 'Flores', texto: 'Señales recientes de atención amable, baños limpios y mesas limpias.' },
    { marca: 'Dean & Dennys', texto: 'Producto elogiado y repunte en 14d.' },
    { marca: 'Caballito', texto: 'Atención cordial reciente pese a histórico flojo.' },
    { marca: 'Dot', texto: 'Producto gusta cuando no falla operación.' },
    { marca: 'Lomas de Zamora', texto: 'Producto valorado históricamente.' },
    { marca: 'Abasto', texto: 'Sin fortaleza consistente detectable con esta muestra.' },
  ],
  prioridades: [
    'Cocina saturada y demoras: separar SLA de salón, retiro y apps por franja horaria.',
    'Temperatura/cocción inconsistente: control final obligatorio antes de despacho.',
    'Reclamos sin respuesta: responder 100% de 1-2★ en menos de 48 hs.',
    'Promos mal comunicadas: tablero único de promos vigentes por sucursal y caja.',
    'Higiene/baños: auditoría inmediata en Abasto, Belgrano R, Flores y Belgrano.',
  ],
}
