const sidenav = $("#sidenav");

function openNav() {
  sidenav.width("250px");
  document.getElementById('open-nav').style.display = "none";
}

function closeNav() {
  document.getElementById("sidenav").style.width = "0";
  document.getElementById('open-nav').style.display = "block";
}
  
const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
})