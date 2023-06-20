<template>
  <div class="trending_gallery">
    <div class="slide">
      <h2>Overwatch</h2>
      <p>A popular mod for overwatch game</p>
      <span>hover here</span>
      <div over class="picture"></div>
      <button></button>
    </div>
    <div class="slide">
      <h2>Metro 2033</h2>
      <p>A popular mod for metro 2033 game</p>
      <span>hover here</span>
      <div metro class="picture"></div>
      <button></button>
    </div>
    <div class="slide">
      <h2>Minecraft Le...</h2>
      <p>A popular mod for minecraft legends game</p>
      <span>hover here</span>
      <div mine class="picture"></div>
      <button></button>
    </div>
  </div>
</template>

<style scoped>

</style>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  // simpleSlider.js
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
});
</script>