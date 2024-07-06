const menu = [
  {
    title: "Bren",
    icon: "img/icon/Hidalgo.svg",
    items: [
      { name: "Prueba", id: "chkPruebaBren" , checked: true }
    ]
  },
  {
    title: "Hidalgo",
    icon: "img/icon/Hidalgo.svg",
    items: [
      { name: "Información Básica", id: "chkInfoGenHGO", checked: true },
      { name: "Población por AGEB", id: "chkPobAGEBHgo" },
      { name: "Escuelas Privadas", id: "chkEMSPrivada" }
    ]
  },
  {
    title: "Instrumentos de Planeación",
    icon: "img/icon/planeacion.svg",
    items: [
      {
        name: "Pachuca de Soto",
        subItems: [
          {
            name: "PMDU",
            subItems2: [
              { name: "Etapas de Crecimiento", id: "chkEC_Pachuca" },
            ]
          },
          // {
          //   name: "Atlas de Riesgo",
          //   subItems2: [
          //     { name: "Elemento", id: "chkNameper3" },
          //     { name: "Elemento", id: "chkNameper4" }
          //   ]
          // },
          // {
          //   name: "POETL",
          //   subItems2: [
          //     { name: "Elemento", id: "chkNameper5" },
          //     { name: "Elemento", id: "chkNameper6" }
          //   ]
          // },

        ]
      },
      {
        name: "Tizayuca",
        subItems: [
          {
            name: "PMDU",
            subItems2: [
              { name: "Zonificación Secundaria", id: "chkZonSec_Tizayuca" },
            ]
          },
          // {
          //   name: "Atlas de Riesgo",
          //   subItems2: [
          //     { name: "Elemento", id: "chkNameper3" },
          //     { name: "Elemento", id: "chkNameper4" }
          //   ]
          // },
          // {
          //   name: "POETL",
          //   subItems2: [
          //     { name: "Elemento", id: "chkNameper5" },
          //     { name: "Elemento", id: "chkNameper6" }
          //   ]
          // },
        ]
      },
      {
        name: "Villa Tezontepec",
        subItems: [
          {
            name: "PMDU",
            subItems2: [
              { name: "Zonificación Secundaria", id: "chkZonSec_VillaTezontepec" },
            ]
          },
          // {
          //   name: "Atlas de Riesgo",
          //   subItems2: [
          //     { name: "Elemento", id: "chkNameper3" },
          //     { name: "Elemento", id: "chkNameper4" }
          //   ]
          // },
          // {
          //   name: "POETL",
          //   subItems2: [
          //     { name: "Elemento", id: "chkNameper5" },
          //     { name: "Elemento", id: "chkNameper6" }
          //   ]
          // },
        ]
      },
      {
        name: "Mineral de la Reforma",
        subItems: [
          {
            name: "PMDU",
            subItems2: [
              { name: "Zonificación Secundaria", id: "chkZonSec_MR" },
            ]
          },
          // {
          //   name: "Atlas de Riesgo",
          //   subItems2: [
          //     { name: "Elemento", id: "chkNameper3" },
          //     { name: "Elemento", id: "chkNameper4" }
          //   ]
          // },
          // {
          //   name: "POETL",
          //   subItems2: [
          //     { name: "Elemento", id: "chkNameper5" },
          //     { name: "Elemento", id: "chkNameper6" }
          //   ]
          // },
        ]
      },
    ]
  },
  {
    title: "Regionalización",
    icon: "img/icon/Regiones.svg",
    items: [
      {
        name: "Información Básica",
        subItems: [
          { name: "Región Tula", id: "chkReg01" },
          { name: "Región Tulancingo", id: "chkReg02" },
          { name: "Región Pachuca", id: "chkReg03" },
          { name: "Región Huejutla", id: "chkReg04" },
          { name: "Región Mineral de la Reforma", id: "chkReg05" },
          { name: "Región Tizayuca", id: "chkReg06" },
          { name: "Región Actopan", id: "chkReg07" },
          { name: "Región Ixmiquilpan", id: "chkReg08" },
          { name: "Región Zacualtipán", id: "chkReg09" },
          { name: "Región Apan", id: "chkReg10" },
          { name: "Región Huichapan", id: "chkReg11" },
          { name: "Región Jacala", id: "chkReg12" }
        ]
      },
      {
        name: "Población por AGEB",
        subItems: [
          { name: "Región Tula", id: "chkPobAGEBR01" },
          { name: "Región Tulancingo", id: "chkPobAGEBR02" },
          { name: "Región Pachuca", id: "chkPobAGEBR03" },
          { name: "Región Huejutla", id: "chkPobAGEBR04" },
          { name: "Región Mineral de la Reforma", id: "chkPobAGEBR05" },
          { name: "Región Tizayuca", id: "chkPobAGEBR06" },
          { name: "Región Actopan", id: "chkPobAGEBR07" },
          { name: "Región Ixmiquilpan", id: "chkPobAGEBR08" },
          { name: "Región Zacualtipán", id: "chkPobAGEBR09" },
          { name: "Región Apan", id: "chkPobAGEBR10" },
          { name: "Región Huichapan", id: "chkPobAGEBR11" },
          { name: "Región Jacala", id: "chkPobAGEBR12" }
        ]
      }
    ]
  },
  {
    title: "Zonas Metropolitanas",
    icon: "img/icon/Zonas_Metropolitanas.svg",
    items: [
      {
        name: "Información Básica",
        subItems: [
          { name: "ZMVM", id: "chkDivisionZMVM" },
          { name: "ZMPachuca", id: "chkInfoZMP" },
          { name: "ZMTula", id: "chkInfoZMT" },
          { name: "ZMTulancingo", id: "chkInfoZMTUL" }
        ]
      },
      {
        name: "Población por AGEB",
        subItems: [
          { name: "ZMPachuca", id: "chkPobAGEBZMP" }
        ]
      },
      {
        name: "PDUyOT ZMP",
        subItems: [
          { name: "Imagen Objetivo", id: "chkZMP_PDUyOT_ImgObj" },
          { name: "Zonificación Primaria", id: "chkZMP_PDUyOT_ZonP" },
          { name: "Etapas de Crecimiento", id: "chkZMP_PDUyOT_EC" },
          { name: "Polígonos de Actuación", id: "chkZMP_PDUyOT_PA" }
        ]
      },
    ]
  }
];

/**
 * Genera el HTML del menú a partir de los datos proporcionados.
 * @param {Array} menuData - Los datos del menú.
 * @returns {string} - El HTML generado para el menú.
 */
function generateMenuHTML(menuData) {
  let html = '<ul class="nav-links">';

  // Iterar sobre cada categoría del menú
  menuData.forEach(category => {
    // Agregar la estructura HTML de cada categoría
    html += `
      <li>
        <div class="iocn-link">
          <img src="${category.icon}" alt="${category.title}">
          <h2 class="link_name">${category.title}</h2>
          <i class='bx bxs-chevron-down arrow'></i>
        </div>
        <ul class="sub-menu">
    `;

    // Iterar sobre los elementos de cada categoría
    category.items.forEach(item => {
      // Verificar si el elemento tiene sub-elementos
      if (item.subItems) {
        // Agregar la estructura HTML de los subelementos al submenú
        html += `
          <li class="menu-dropdown">
            <div>
              <div class="contenedor">
                <p class="titulo_sub">${item.name}</p>
                <i class='bx bxs-chevron-down arrowSub'></i>
              </div>
              <div class="link-sub">
                <span class="link_name">${item.name}</span>
              </div>
        `;

        // Verificar si hay subItems2 dentro de subItems
        if (item.subItems.some(subItem => subItem.subItems2)) {
          html += `<ul class="submenu-items" style="padding: 5px 0px 5px 15px;">`;
          item.subItems.forEach(subItem => {
            // Verificar si el subItem tiene subItems2
            if (subItem.subItems2) {
              html += `
                <li class="menu-dropdown">
                  <div>
                    <div class="contenedor">
                      <p class="titulo_subsub">${subItem.name}</p>
                      <i class='bx bxs-chevron-down arrowSubSub'></i>
                    </div>
                    <div class="link-sub">
                      <span class="link_name">${subItem.name}</span>
                    </div>
                    <ul class="submenu-items" style="padding: 5px 0px 5px 15px;">
              `;

              // Agregar los elementos de subItems2
              subItem.subItems2.forEach(subItem2 => {
                html += generateSimpleCheckbox(subItem2);
              });

              html += `</ul></div></li>`;
            } else {
              // Si no hay subItems2, agregar el subItem como checkbox
              html += generateSimpleCheckbox(subItem);
            }
          });
          html += `</ul>`;
        } else {
          // Si no hay subItems2, agregar los subItems como checkbox
          html += `<ul class="submenu-items">`;
          item.subItems.forEach(subItem => {
            html += generateSimpleCheckbox(subItem);
          });
          html += `</ul>`;
        }

        html += `</div>
          </li>`;
      } else {
        // Si el elemento no tiene subelementos, agregarlo como checkbox
        html += generateSimpleCheckbox(item);
      }
    });

    html += `</ul></li>`;
  });

  html += `</ul>`;
  return html;
}

// Función para generar el HTML de un checkbox simple
function generateSimpleCheckbox(item) {
  return `
    <li class="SidebarCheckbox">
      <input type="checkbox" id="${item.id}" name="check" value="" ${item.checked ? 'checked' : ''} />
      <label for="${item.id}">
        <span class="checkmark"></span>
        ${item.name}
      </label>
    </li>
  `;
}

// Generar el HTML del menú
const menuHTML = generateMenuHTML(menu);

// Insertar el HTML generado en el documento
document.getElementById('menu-container').innerHTML = menuHTML;
