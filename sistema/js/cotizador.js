// IDEA: esta es la ventana de  Clientes
var btnAbrirPopup = document.getElementById('boton-abrir-popup'),
    ventanaNuevoCliente = document.getElementById('ventanaNuevoCliente'),
    popup =document.getElementById('contenidoVentanaCliente'),
    btncerrarpopup = document.getElementById('btn-cerrar-popup');


    btnAbrirPopup.addEventListener('click',function(){
      ventanaNuevoCliente.classList.add("active");
    });
    btncerrarpopup.addEventListener('click',function(){
ventanaNuevoCliente.classList.remove("active");
    });
// IDEA: esta es la ventana de Productos

var btnAbrirPopup = document.getElementById('boton-abrir-popup-Productos'),
    ventanaNuevoProducto = document.getElementById('ventanaNuevoProducto'),
    popup =document.getElementById('contenidoVentanaProducto'),
    btncerrarpopup = document.getElementById('btn-cerrar-popup-productos');


    btnAbrirPopup.addEventListener('click',function(){
      ventanaNuevoProducto.classList.add("active");
    });
    btncerrarpopup.addEventListener('click',function(){
ventanaNuevoProducto.classList.remove("active");
    });
