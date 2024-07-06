const simbologiaData = {
  legend: [
    { color: "#cc2400", text: "4202 +" },
    { color: "#e24800", text: "3152-4201" },
    { color: "#fd7601", text: "2102-3151" },
    { color: "#ff9a00", text: "1051-2101" },
    { color: "#fece2e", text: "0-1050" }
  ],
  ImgObjetivo: [
    { color: "darkblue", text: "Ampliación Tren Suburbano" },
    { color: "cornflowerblue", text: "Vialiades Propuestas" },
    { color: "Gold", text: "Libramiento Sur de Pachuca" },
    { color: "black", text: "Habilitación Tren Pachuca" },
    { color: "saddlebrown", text: "Estación Tren Pachuca" },
    { color: "purple", text: "Corredor Turístico Pachuca - Tula de Allende" },
    { color: "firebrick", text: "Corredor de la Montaña" },
    { color: "deeppink", text: "Corredor de las Haciendas" },
    { color: "#ee958b", text: "Comarca Minera UNESCO" },
    { color: "mediumspringgreen", text: "Complejo Hidráulico Acueducto Padre Tembleque" },
    { color: "Red", text: "Corredor Comercio y Servicios Carretera México - Pachuca" },
    { color: "darkorange", text: "Corredor Comercio y Servicios Carretera Pachuca - Ciudad Sahagún" },
    { color: "#14122c", text: "Conjunto de Parques Industriales" },
    { color: "Orange", text: "CU Centros Urbanos" },
    { color: "coral", text: "SCU Subcentros Urbanos" },
    { color: "blanchedalmond", text: "CUR Centro Urbano Rural" },
    { color: "#b3ff19", text: "Parque Hídrico" },
    { color: "green", text: "Parque Ecológico" },
    { color: "#416864", text: "Nodo de Primer Orden" },
    { color: "#759eff", text: "Nodo de Segundo Orden" },
    { color: "#e4fff9", text: "Nodo de Tercer Orden" },
    { color: "#c00000", text: "Programa Parcial de Desarrollo Urbano" }
  ],
  ZonP: [
    { color: "khaki", text: "Suelo Urbano" },
    { color: "orange", text: "Suelo Urbanizable" },
    { color: "yellowgreen", text: "Suelo no urbanizable" }
  ],
  EtapaCrecimiento: [
    { color: "#eeef5d", text: "Zona Urbana" },
    { color: "#ffcc50", text: "Corto Plazo (2020-2022)" },
    { color: "#ffa722", text: "Mediano Plazo (2022-2027)" },
    { color: "#ed8900", text: "Largo Plazo (2027-2052)" },
    { color: "#853400", text: "Reserva (Condicionado)" },
    { color: "dimgrey", text: "Polígono de Actuación (Condicionado)" },
    { color: "yellowgreen", text: "Suelo No Urbanizable" },
    { color: "#fff", text: "Programa Parcial de Desarrollo Urbano Zona" }
  ],
  PoligonosActuacion: [
    { color: "#00008b", text: "Clúster Logístico" },
    { color: "#6faac8", text: "Clúster Salud" },
    { color: "#4a1743", text: "Parque Industrial" },
    { color: "#baff95", text: "Parque Hidrico" },
    { color: "#ed40be", text: "Rastro Tipo TIFF" },
    { color: "#f28781", text: "Recinto Ferial" },
    { color: "#ff8041", text: "Subcentro Urbano" },
    { color: "#ffff3f", text: "Suelo Urbanizable" }
  ],
  PMDU_Pachuca: [
    { color: "#c65911", text: "Hola" },
    { color: "#691B31", text: "En proceso de elaboración" },
    { color: "#DDC9A3", text: "Instrumento vigente" },
    { color: "#BC955B", text: "Instrumento vigente en proceso de actualización" },
    { color: "#98989A", text: "No existe" },
    { color: "#A02142", text: "Solicitado SEDATU" },
    { color: "#20344c", text: "Susceptible de elaborar" }
  ],
  PMDU_Tizayuca: [
    { color: "#d4e5b3", text: "Agricultura Tecnificada" },
    { color: "#d5d5b3", text: "Agroindustria" },
    { color: "#c9f8b3", text: "Conservación y Restauración Ambiental" },
    { color: "#ffccb3", text: "Corredor Urbano Mixto de Baja Densidad" },
    { color: "#ffe6b3", text: "Corredor Urbano Mixto de Media Densidad" },
    { color: "#80e2ff", text: "Cuerpos de Agua" },
    { color: "#ffb3ee", text: "Equipamiento Urbano" },
    { color: "#dbc6c2", text: "Habitacional Densidad Alta (Unifamiliar)" },
    { color: "#f1dfdc", text: "Habitacional Densidad Baja (Unifamiliar)" },
    { color: "#ead0cb", text: "Habitacional Densidad Media (Unifamiliar)" },
    { color: "#e8cdc8", text: "Habitacional Densidad Media Alta (Unifamiliar)" },
    { color: "#eed7d3", text: "Habitacional Densidad Media Baja (Unifamiliar)" },
    { color: "#d3c2bf", text: "Habitacional Densidad Alta (multifamiliar dúplex, tríplex y cuádruplex)" },
    { color: "#bdb8b7", text: "Habitacional Densidad Muy Alta 2" },
    { color: "#f4e7e4", text: "Habitacional Densidad Muy Baja (Unifamiliar)" },
    { color: "#f9ecff", text: "Industria de Bajo Impacto" },
    { color: "#dab3d3", text: "Industria de Gran Impacto" },
    { color: "#f5d5ff", text: "Industria de Mediano Impacto" },
    { color: "#b3bed5", text: "Infraestructura Urbana" },
    { color: "#d5b3b3", text: "Mixto" },
    { color: "#bed5b3", text: "Parque Hídrico" },
    { color: "#FF7F00", text: "Reserva Territorial Futura" }
  ],
  PMDU_VillaTezontepec: [
    { color: "#d4e5b3", text: "Agroindustria" },
    { color: "#d5d5b3", text: "Área Agrícola" },
    { color: "#c9f8b3", text: "Club de Golf" },
    { color: "#ffccb3", text: "Declaratoria de Destino 1999" },
    { color: "#ffe6b3", text: "Equipamiento" },
    { color: "#80e2ff", text: "Habitacional" },
    { color: "#ffb3ee", text: "Mixto" },
    { color: "#dbc6c2", text: "Parque Acuático" },
    { color: "#f1dfdc", text: "Parque Temático" },
    { color: "#ead0cb", text: "Proyecto PLATAH" },
    { color: "#e8cdc8", text: "Servicios" },
    { color: "#eed7d3", text: "Traza Urbana Actual" },
    { color: "#d3c2bf", text: "Zona de Amortiguamiento Verde" },
    { color: "#bdb8b7", text: "Zona de Preservación Ecológica" }
  ],
  PMDU_MR: [
    { color: "#ffa420", text: "Centro Urbano Mixto" },
    { color: "#e6c9b2", text: "Comercio y Servicios" },
    { color: "#c53131", text: "Equipamiento Institucional" },
    { color: "#e600aa", text: "Equipamiento Regional" },
    { color: "#e600aa", text: "Espacios Verdes y Abiertos" },
    { color: "#98e500", text: "Estructura Vial Propuesta" },
    { color: "#ffebb0", text: "Habitacional Hasta 50 Hab" },
    { color: "#ffffbe", text: "Habitacional Hasta 100 Hab" },
    { color: "#feff73", text: "Habitacional Hasta 200 Hab" },
    { color: "#ffff00", text: "Habitacional Hasta 300 Hab" },
    { color: "#e7e600", text: "Habitacional Hasta 400 Hab" },
    { color: "#ffc858", text: "Habitacional Hasta 500 Hab" },
    { color: "#f0bc59", text: "Habitacional Hasta 600 Hab" },
    { color: "#ff9159", text: "Habitacional Hasta 700 Hab" },
    { color: "#005be7", text: "Industrial Ligera No Contaminante" },
    { color: "#c6a258", text: "Polígono de Actuación" },
    { color: "#2596be", text: "Programas Parciales de Desarrollo Urbano" },
    { color: "#a3ff74", text: "Protección Agricola Temporal" },
    { color: "#00734c", text: "Protección Ecologíca Forestal" },
    { color: "#38a700", text: "Protección Pastizal Inducido" },
    // { color: "#", text: "Puente bimodal" },
    // { color: "#", text: "Puente multimodal" },
    { color: "#a58b5a", text: "Reserva" },
    { color: "#ff7f7e", text: "Servicios" },
    { color: "#f1d9d8", text: "Subcentro Urbano Mixto" },
    { color: "#9c9c9c", text: "Zona Sujeta a Estudio Hidrológico" },
    { color: "#e2e2ce", text: "ZSERPCE" }
  ]
};

// Función para crear la tabla de simbología
function crearTablaSimbologia(tablaId, data) {
  const tabla = document.getElementById(tablaId);
  const tableBody = tabla.querySelector("table");

  data.forEach(item => {
    const row = document.createElement("tr");
    const colorCell = document.createElement("td");
    const textCell = document.createElement("td");
    const colorDiv = document.createElement("div");

    colorDiv.className = "legend-color";
    colorDiv.style.background = item.color;

    colorCell.appendChild(colorDiv);
    textCell.textContent = item.text;

    row.appendChild(colorCell);
    row.appendChild(textCell);

    tableBody.appendChild(row);
  });
}

// Iterar sobre los datos de simbología y crear las tablas correspondientes
Object.entries(simbologiaData).forEach(([tablaId, data]) => {
  crearTablaSimbologia(tablaId, data);
});
