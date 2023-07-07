<template>
  <div class="trending_gallery" ref="gallery" @wheel="galleryScroll">
    <div v-for="trend in trends" ref="slides" class="slide">
      <router-link :to="`/game/${getGameById(trend.mod.game)?.shortName }/mod/${trend.mod.id}`">
        <h2>{{ getGameById(trend.mod.game)?.title }}</h2>
        <p>{{ trend.mod.title }}</p>
        <span>hover here</span>
        <div v-if="trend.mod.logo" over class="picture" :style="`background-image: url('${trend.mod.logo}')`"></div>
        <div v-else over class="picture"></div>
        <button></button>
      </router-link>
    </div>
  </div>
</template>

<style scoped>

</style>

<script setup>
import { computed, onUpdated, onMounted, watch } from "vue";
import { useStore } from "vuex";
import simpleSlider from '../simpleSlider.js';

const store = useStore();

const getGameById = computed(() => {
  return store.getters.getGameById;
});
const trends = computed(() => {
  return store.getters.getTrends;
});

let trendsLength = 0;

watch(trends, () => {
  trendsLength = trends.value.length;
});

store.dispatch("fetchGameList");
store.dispatch("fetchTrends");

onUpdated(() => {
  if (trendsLength < 2){
    simpleSlider();
  }
});
</script>