//función para resaltar los items deseados clickeando en los botones de la barra de navegación 

function onClickMenu(menuItem) {
    var element = document.getElementById(menuItem)
    element.classList.toggle("bokita")
}