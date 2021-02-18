const hamburger = document.querySelector('.hamburger');
const openNav = document.querySelector('.open-nav');



hamburger.onclick = () => {
    openNav.classList.toggle('open');
    hamburger.classList.toggle('open');
}