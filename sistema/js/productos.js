
var btnAbrirPopup = document.getElementById('btn_abrir'),
    overlay = document.getElementById('overlay'),
    popup =document.getElementById('popup'),
    btncerrarpopup = document.getElementById('btn-cerrar-popup');


    btnAbrirPopup.addEventListener('click',function(){
      overlay.classList.add("active");
    });

    btncerrarpopup.addEventListener('click',function(){
      overlay.classList.remove("active");
    });
