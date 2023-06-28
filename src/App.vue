<template>
  <SideMenu></SideMenu>
  <TopPanel></TopPanel>

  <AuthBlock></AuthBlock>
  <ProfileBlock></ProfileBlock>

  <div class="background">
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
</style>

<script setup>
import { onMounted } from "vue";
import SideMenu from "./components/SideMenu.vue";
import TopPanel from "./components/TopPanel.vue";
import AuthBlock from "./components/AuthBlock.vue";
import ProfileBlock from "./components/ProfileBlock.vue";

onMounted(() => {
  // betterScrollbar.js
  let contentBlocks = document.querySelectorAll('.content');

  contentBlocks.forEach(function(content) {
    let scrollbar = document.createElement('div');
    let thumb = document.createElement('div');
    let isDragging = false;
    let startPosition;
    let startScrollTop;

    scrollbar.classList.add('scrollbar');
    thumb.classList.add('thumb');

    scrollbar.appendChild(thumb);
    content.appendChild(scrollbar);

    updateScrollbar(content);

    content.addEventListener('scroll', function() {
      updateScrollbar(content);
    });

    window.addEventListener('resize', function() {
      updateScrollbar(content);
    });

    thumb.addEventListener('mousedown', function(e) {
      isDragging = true;
      startPosition = e.clientY;
      startScrollTop = content.scrollTop;
    });

    content.addEventListener('mousemove', function(e) {
      if (isDragging) {
        let deltaY = e.clientY - startPosition;
        let scrollDelta = (deltaY / scrollbar.offsetHeight) * content.scrollHeight;
        content.scrollTop = startScrollTop + scrollDelta;
      }
    });

    document.addEventListener('mouseup', function() {
      isDragging = false;
    });
  });

  function updateScrollbar(content) {
    let scrollbar = content.querySelector('.scrollbar');
    let thumb = content.querySelector('.thumb');
    let scrollTop = content.scrollTop;
    let maxScrollTop = content.scrollHeight - content.clientHeight;

    let scrollbarHeight = content.clientHeight * 0.92;
    scrollbar.style.height = `${scrollbarHeight}px`;

    let thumbHeight = (content.clientHeight / content.scrollHeight) * scrollbarHeight;
    thumb.style.height = `${thumbHeight}px`;

    if (scrollTop >= maxScrollTop) {
      thumb.style.top = `${scrollbarHeight - thumbHeight}px`;
    } else {
      let thumbTop = (scrollTop / maxScrollTop) * (scrollbarHeight - thumbHeight);
      thumb.style.top = `${thumbTop}px`;
    }

    if (content.scrollHeight <= content.clientHeight) {
      scrollbar.classList.add('scrollbar-hidden');
    } else {
      scrollbar.classList.remove('scrollbar-hidden');
    }
  }
});
</script>