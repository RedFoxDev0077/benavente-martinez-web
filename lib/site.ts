// Datos de la empresa. Ajustar los que están marcados como TODO con la información oficial.
export const SITE = {
  nombre: "Suministros Técnicos Benavente Martínez, C.A.",
  nombreCorto: "Benavente Martínez",
  descripcion:
    "Distribución de productos químicos, materias primas e insumos industriales para la industria venezolana, con asesoría técnica y despacho a todo el país.",
  url: "https://benaventemartinez.com",
  whatsapp: "584241354656", // TODO: confirmar número oficial de ventas (formato internacional, sin + ni espacios)
  telefono: "+58 424-1354656", // TODO: confirmar
  email: "ventas@benaventemartinez.com", // TODO: confirmar
  rif: "J-________", // TODO: completar RIF
  ubicacion: "Valencia y Guacara, estado Carabobo, Venezuela",
  horario: "Lunes a viernes · 8:00 a.m. – 5:00 p.m.",
};

export const waLink = (text?: string) =>
  `https://wa.me/${SITE.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
