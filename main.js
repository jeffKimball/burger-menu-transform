const burgerBtn = document.querySelector('.burger-menu');
let menuOpen = false;

burgerBtn.addEventListener('click', () => {
  if(!menuOpen) {
    burgerBtn.classList.add('open');
    menuOpen = true;
  } else {
    burgerBtn.classList.remove('open');
    menuOpen = false;
  }
});