// Datos de la empresa (según el sitio oficial actual).
export const SITE = {
  nombre: "Suministros Técnicos Benavente Martínez, C.A.",
  nombreCorto: "Benavente Martínez",
  descripcion:
    "Comercialización de materia prima confiable para diversas industrias — cosmética, limpieza, alimentos, textiles y más — con asesoría técnica y atención personalizada.",
  url: "https://benaventemartinez.com",
  whatsapp: "584123622752", // 0412-362.27.52
  telefono: "+58 (414) 479.72.90",
  telefono2: "+58 (412) 362.27.52",
  email: "suministrostecnicosbm@gmail.com",
  email2: "compras@benaventemartinez.com",
  instagram: "https://www.instagram.com/suministrosbenaventemartinez",
  rif: "J-40891289-9",
  ubicacion: "Los Teques, Miranda, Venezuela",
  almacenes: "Valencia, Maracay y San Antonio de Los Altos",
  despacho: "Despacho a todo el país",
  horario: "Oficina: Lunes a viernes, 8:00 a.m. – 6:00 p.m.",
  horarioDespacho: "Despachos: a convenir",
  chatbot: "SuminBot",
};

export const waLink = (text?: string) =>
  `https://wa.me/${SITE.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
