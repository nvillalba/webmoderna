const velez = document.querySelector('.velez');
const menu = document.querySelector('.menu-navegacion');

// console.log(menu);
// console.log(velez);


velez.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})


window.addEventListener('click', e=>{
    if(menu.classList.contains('spread') && e.target != menu && e.target != velez){

            menu.classList.toggle("spread")
    }
})