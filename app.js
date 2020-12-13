//Constantes
const listaMenu=document.querySelectorAll('.listaMenu');
const navButton=document.querySelector('#navbar-button');
const enlace=document.querySelector('#contentDetail');
const navbarMain=document.querySelector('#navbarMain');
//Eventos
listaMenu.forEach(lista=>{
    lista.addEventListener('click',(e)=>{
        mostrarPagina(e)
    });
});
//Funciones
function mostrarPagina(e){
    const url=e.target.dataset.url;
    url!=='' ? enlace.src=`./${url}`:null;
    console.log(navButton);
    // Clases para el toggle de la Navbar
    navButton.classList.add('collapsed');
    navbarMain.classList.remove('show');
    navbarMain.ariaExpanded=false;
    

}