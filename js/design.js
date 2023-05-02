document.addEventListener("DOMContentLoaded", () => {    

    // hamburger menu 
    const menu = document.querySelector('.icon');
    const menuCont = document.querySelector('.menu_cont');
    menu.addEventListener('click', (event) => {
        menu.classList.toggle("open");
        if(menu.classList.contains('open')) {
            menuCont.classList.add('show');
            bodyEl.classList.add('over_hide');
        }else{
            menuCont.classList.remove('show');
            bodyEl.classList.remove('over_hide');
        }
    });
    // END hamburger menu 

}); //DOMContentLoaded