// IDEA: llanamda de formulario
var btnAbrirPopup = document.getElementById('navbarDropdown'),
   overlay = document.getElementById('overlay'),
   popup =document.getElementById('popup'),
   btncerrarpopup = document.getElementById('btn-cerrar-popup');


   btnAbrirPopup.addEventListener('click',function(){
     overlay.classList.add("active");
   });

   btncerrarpopup.addEventListener('click',function(){
     overlay.classList.remove("active");
   });
