const bagOpen = document.querySelector('.bag-wrapper');
const asideBar = document.getElementById('aside');
const bagClose = document.querySelector('.aside-close');

bagOpen.addEventListener('click', () =>{
    asideBar.classList.add('active');
})
bagClose.addEventListener('click', () =>{
    asideBar.classList.remove('active');
})