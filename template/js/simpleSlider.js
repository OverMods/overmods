const gallery = document.querySelector('.trending_gallery');
const slides = document.querySelectorAll('.slide');

var slideWidth = slides[0].offsetWidth + 40;

gallery.addEventListener('wheel', function(event) {
  event.preventDefault();
  var delta = Math.sign(event.deltaY);
  gallery.scrollLeft += delta * slideWidth;
});

for (let i = 0; i < 3; i++) {
  const cloneSlide = slides[i].cloneNode(true);
  gallery.appendChild(cloneSlide);
}

for (let i = slides.length - 3; i < slides.length; i++) {
  const cloneSlide = slides[i].cloneNode(true);
  gallery.insertBefore(cloneSlide, slides[0]);
}

gallery.scrollLeft = gallery.scrollWidth / 3;

function checkSlideClones() {
  if (gallery.scrollLeft <= 0) {
    gallery.style.scrollBehavior = 'auto';
    gallery.scrollLeft = gallery.scrollWidth / 3;
    setTimeout(() => {
      gallery.style.scrollBehavior = 'smooth';
    }, 0);
  } else if (gallery.scrollLeft >= (gallery.scrollWidth / 3) * 2) {
    gallery.style.scrollBehavior = 'auto';
    gallery.scrollLeft = gallery.scrollWidth / 3;
    setTimeout(() => {
      gallery.style.scrollBehavior = 'smooth';
    }, 0);
  }
}

gallery.addEventListener('scroll', checkSlideClones);

function autoScroll() {
  setInterval(function() {
    gallery.scrollLeft += slideWidth + 2;
  }, 10000); // Інтервал прокрутки (10 секунд)
}

autoScroll();