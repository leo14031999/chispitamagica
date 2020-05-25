
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
