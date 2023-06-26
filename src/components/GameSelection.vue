<template>
  <div class="game_selection" id="gameSelection">
    <div id="gameNotFound" style="display: none;">
      <p>Game over!</p>
      <p>No results found.</p>
      <p>Keep exploring!</p>
      <img src="../assets/images/icons/gray_logo.png" alt="">
    </div>
    <router-link v-for="game in gameList" :key="game.id" :to="`/game/${game.shortName}`">
      <div class="game" :class="{fade: game.title !== game.shortTitle}">
        <div class="logo" :style="`background-image: url(${game.logo})`"></div>
        <p :game="game.shortTitle">{{ game.shortTitle }}</p>
        <div class="hover"></div>
        <div class="arrow"></div>
      </div>
    </router-link>
    <br>
    <br>
  </div>
</template>

<style scoped>

</style>

<script setup>
import { onMounted, ref, computed } from "vue";
import { useStore } from "vuex";
const store = useStore();

const searchPrompt = ref(null);
const gameList = computed(() => {
  return searchPrompt.value
      ? store.getters.getGameList.filter(game => game.title.match(new RegExp(searchPrompt.value, "i")))
      : store.getters.getGameList;
})

function doSearch(prompt) {
  searchPrompt.value = prompt;
}

defineExpose({
  doSearch
});

onMounted(() => {
  store.dispatch("fetchGameList");
  //import('../assets/js/gameSearch.js');
  //import('../assets/js/shorten-gameTitle.js');
});
</script>