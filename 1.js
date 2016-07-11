window.onload = function(){

    var sand = document.getElementById('sandwitch');
    var menu = document.getElementById('menu');
    var menuItem = document.getElementsByClassName('menu-item');
    var main = document.getElementsByTagName('main')[0];

    sand.addEventListener('click', function(){
        menu.classList.toggle("vertical-menu");
        for(var i=0; i<menuItem.length; i++){
            menuItem[i].classList.toggle("ver-menu-item");
        };
    });
    // at least somewhere(
    main.addEventListener('click', function(){
        menu.className = "";
    });
}
