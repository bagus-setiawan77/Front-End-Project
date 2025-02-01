const menu = document.getElementById('menu');
const close = document.getElementById('close');
const navbar = document.getElementById('navbar');
const header = document.getElementById("header");
const main = document.getElementById('main');
const footer = document.getElementById('footer');
const playlist = document.getElementById('playlist');

if(menu){
    menu.addEventListener('click', () => {
        navbar.classList.add('active');
        playlist.classList.add('active');
        header.classList.add('active');
        main.classList.add('active');
        footer.classList.add('active');
    })
}

if (close) {
    close.addEventListener("click", () => {
        navbar.classList.remove("active");
        playlist.classList.remove("active");
        header.classList.remove("active");
        main.classList.remove("active");
        footer.classList.remove("active");
    });
}