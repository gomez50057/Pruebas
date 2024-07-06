// PRELOAD
const preloader = document.querySelector("[data-preaload]");
window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});

// menu-dropdown
document.querySelectorAll(".arrow, .arrowSub, .arrowSubSub, .link_name, .titulo_sub, .titulo_subsub").forEach(function (arrow) {
  arrow.addEventListener("click", function (e) {
    var arrowParent = e.target.parentElement.parentElement;
    arrowParent.classList.toggle("showMenu");
    
    // Verificar si arrow.closest(".menu-dropdown") no es null antes de acceder a querySelector
    var menuDropdown = arrow.closest(".menu-dropdown");
    if (menuDropdown) {
      var submenu = menuDropdown.querySelector(".submenu-items");
      
      // Verificar si submenu no es null antes de intentar acceder a sus propiedades
      if (submenu) {
        submenu.style.display = (submenu.style.display === "block") ? "none" : "block";
        
        // Verificar si el elemento clicado es .arrowSubSub o .arrow y .titulo_subsub
        if (arrow.classList.contains("arrowSubSub") || arrow.classList.contains("titulo_subsub")) {
          var arrowToRotate = menuDropdown.querySelector(".arrowSubSub");
          arrowToRotate.style.transform = submenu.style.display === "block" ? "rotate(-180deg)" : "rotate(0deg)";
        } else if (arrow.classList.contains("arrow") || arrow.classList.contains("arrowSub")) {
          arrow.style.transform = submenu.style.display === "block" ? "rotate(-180deg)" : "rotate(0deg)";
        }
      }
    }
  });
});




// Función para verificar y cerrar la barra lateral si la pantalla es menor a 500px de ancho //
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".logo-details");
let profileContent = document.querySelector(".profile-content");
function checkScreenWidth() {
  if (window.innerWidth < 500) {
    sidebar.classList.add("close");
  } else {
    sidebar.classList.remove("close");
  }
}

// Verificar el ancho de la pantalla al cargar la página
checkScreenWidth();
// Verificar el ancho de la pantalla cada vez que cambie el tamaño de la ventana
window.addEventListener("resize", () => {
  checkScreenWidth();
});

sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

profileContent.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});



// Obtén referencias a los checkboxes y la tabla de simbología //
var checkboxes = [
  document.getElementById("chkPobAGEBZMP"),
  document.getElementById("chkPobAGEBHgo")
];

// Agrega checkboxes adicionales con nombres similares
for (var i = 1; i <= 12; i++) {
  var checkbox = document.getElementById("chkPobAGEBR" + (i < 10 ? "0" : "") + i);
  checkboxes.push(checkbox);
}

var legend = document.getElementById("legend");

// Agrega oyentes de cambio a los checkboxes
checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener("change", actualizarTablaLegend);
});

// Función para actualizar la visibilidad de la tabla
function actualizarTablaLegend() {
  // Verifica el estado de todos los checkboxes
  var mostrarTabla = checkboxes.some(function (checkbox) {
    return checkbox.checked;
  });

  // Muestra u oculta la tabla según la condición
  legend.style.display = mostrarTabla ? "block" : "none";
}




// Define una función para manejar la visibilidad de las tablas //
function actualizarTabla(checkbox, tablaId) {
  var tabla = document.getElementById(tablaId);
  tabla.style.display = checkbox.checked ? 'block' : 'none';
}

// Obtén referencias a los checkboxes
var checkboxImgObj = document.getElementById('chkZMP_PDUyOT_ImgObj');
var checkboxZonP = document.getElementById('chkZMP_PDUyOT_ZonP');
var checkboxEtapaCrecimiento = document.getElementById('chkZMP_PDUyOT_EC');
var checkboxPoligonosActuacion = document.getElementById('chkZMP_PDUyOT_PA');


var checkboxPMDU_Pachuca = document.getElementById('chkEC_Pachuca');

var checkboxPMDU_Tizayuca = document.getElementById('chkZonSec_Tizayuca');
var checkboxPMDU_VillaTezontepec = document.getElementById('chkZonSec_VillaTezontepec');
var checkboxPMDU_MR = document.getElementById('chkZonSec_MR');




// Agrega oyentes de cambio a los checkboxes
checkboxImgObj.addEventListener('change', function () {
  actualizarTabla(checkboxImgObj, 'ImgObjetivo');
});
checkboxZonP.addEventListener('change', function () {
  actualizarTabla(checkboxZonP, 'ZonP');
});
checkboxEtapaCrecimiento.addEventListener('change', function () {
  actualizarTabla(checkboxEtapaCrecimiento, 'EtapaCrecimiento');
});
checkboxPoligonosActuacion.addEventListener('change', function () {
  actualizarTabla(checkboxPoligonosActuacion, 'PoligonosActuacion');
});

checkboxPMDU_Pachuca.addEventListener('change', function () {
  actualizarTabla(checkboxPMDU_Pachuca, 'PMDU_Pachuca');
});

checkboxPMDU_Tizayuca.addEventListener('change', function () {
  actualizarTabla(checkboxPMDU_Tizayuca, 'PMDU_Tizayuca');
});

checkboxPMDU_VillaTezontepec.addEventListener('change', function () {
  actualizarTabla(checkboxPMDU_VillaTezontepec, 'PMDU_VillaTezontepec');
});

checkboxPMDU_MR.addEventListener('change', function () {
  actualizarTabla(checkboxPMDU_MR, 'PMDU_MR');
});


// // // Función para añadir el evento de cambio a un elemento Ajusta el zoom para mostrar la capa correspondiente
function addChangeEventListener(id, layer) {
  document.getElementById(id).addEventListener('change', function() {
    if (this.checked) {
      map.fitBounds(layer.getBounds(), { maxZoom: 12 });
    } 
  });
}

// Añade el evento de cambio para chkZonSec_XXXXXXXX
addChangeEventListener('chkZonSec_Tizayuca', HDMA_Unifamiliar);
addChangeEventListener('chkZonSec_MR', MR_PA);
addChangeEventListener('chkZonSec_VillaTezontepec', Villa_equipamiento);