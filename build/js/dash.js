const btnToggle = document.querySelector('.navbar-toggler')
const btnIcon = document.querySelector('.navbar-toggler i')

const btnSidebar = document.querySelector('.btn_sidebar')
const btnSidebarClose = document.querySelector('.btn_close-sidebar')
const sidebar = document.querySelector('.sidebar')

btnToggle.addEventListener('click', () => {
    if (btnToggle.getAttribute('aria-expanded') === 'true') 
    {
        btnIcon.classList.remove('fa-solid', 'fa-bars')
        btnIcon.classList.add('fa-solid', 'fa-xmark');
        if(sidebar.classList.contains('active')){
            sidebar.classList.remove('active')
        }
    }else {
        btnIcon.classList.remove('fa-solid', 'fa-xmark');
        btnIcon.classList.add('fa-solid', 'fa-bars')
    }
    
})

btnSidebar.addEventListener('click', () => {
    sidebar.classList.add('active');
    if (btnToggle.getAttribute('aria-expanded') === 'true'){
        console.log('hola');
    }
})

btnSidebarClose.addEventListener('click', () => {
    sidebar.classList.remove('active');
})