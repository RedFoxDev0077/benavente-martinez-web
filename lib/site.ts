// Datos de la empresa. Ajustar los que están marcados como TODO con la información oficial.
export const SITE = {
  nombre: "Suministros Técnicos Benavente Martínez, C.A.",
  nombreCorto: "Benavente Martínez",
  descripcion:
    "Distribución de productos químicos, materias primas e insumos industriales para la industria venezolana, con asesoría técnica y despacho a todo el país.",
  url: "https://benaventemartinez.com",
  whatsapp: "584123622752", // 0412-362.27.52
  telefono: "+58 412-362.27.52",
  email: "suministrostecnicosbm@gmail.com",
  rif: "J-40891289-9",
  ubicacion: "Valencia y Guacara, estado Carabobo, Venezuela",
  horario: "Lunes a viernes · 8:00 a.m. – 5:00 p.m.",
};

export const waLink = (text?: string) =>
  `https://wa.me/${SITE.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
