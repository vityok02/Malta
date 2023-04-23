(function () {
  $('.carousel').carousel({
    interval: 2000
  });

  function openNav() {
    $("#sidenav").width("250px");
  }
  function closeNav() {
    document.getElementById("sidenav").style.width = "0";
  }

  const animItems = $('._anim-items');

  if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll());
    function animOnScroll() {
      for (const animItem of animItems) {
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 4;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;
        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
          animItem.classList.add('_active');
        } else {
          animItem.classList.remove('_active');
        }
      }
    }
    function offset(el) {
      const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    animOnScroll();
  }

})();