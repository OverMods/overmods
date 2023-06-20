<template>
  <div class="game_selection" id="gameSelection">
    <div id="gameNotFound" style="display: none;">Ніхуя не знайшов</div>
    <div v-for="game in gameList" class="game" :key="game.id">
      <div class="logo" :style="`background-image: url(${game.logo})`"></div>
      <p>{{ game.title }}</p>
      <div class="hover"></div>
      <div class="arrow"></div>
    </div>
    <br>
    <br>
  </div>
</template>

<style scoped>

</style>

<script setup>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
const store = useStore();

const gameList = computed(() => {
  return store.getters.getGameList;
})

onMounted(() => {
  store.dispatch("fetchGameList");

  // shorten-gameTitle.js
  let gameTitles = document.querySelectorAll('.game_selection .game p');

  gameTitles.forEach(function(titleElement) {
    let maxLength = 13;
    let title = titleElement.textContent;
    let filteredTitle = title.replace(/[:\s]/g, '');

    if (filteredTitle.length > maxLength) {
      let shortenedTitle = title.substring(0, maxLength) + '...';
      titleElement.textContent = shortenedTitle;

      let gameElement = titleElement.closest('.game');
      let fadeElement = document.createElement('div');
      fadeElement.classList.add('fade');
      gameElement.appendChild(fadeElement);
    }
  });
});
</script>