<template>
  <div class="game_selection" id="gameSelection">
    <div id="gameNotFound" style="display: none;">Ніхуя не знайшов</div>
    <div v-for="game in gameList" class="game" :key="game.id" :class="{fade: game.title !== game.shortTitle}">
      <div class="logo" :style="`background-image: url(${game.logo})`"></div>
      <p>{{ game.shortTitle }}</p>
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
});
</script>